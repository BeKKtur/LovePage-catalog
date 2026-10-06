"use client";
import { useEffect, useRef, useState } from "react";
import type { Template } from "@/data/templates";
import { categories } from "@/data/categories";
import { formatPrice, SITE_CONFIG } from "@/config/site";
import { ContactLinks } from "@/components/shared/ContactLinks";

export function OrderModal({
  selectedTemplate,
  closeOrderModal,
}: {
  selectedTemplate?: Template;
  closeOrderModal: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const selectedCategory = categories.find(
    (category) => category.slug === selectedTemplate?.category,
  );
  const message = selectedTemplate
    ? `Здравствуйте! Хочу заказать дизайн «${selectedTemplate.title}» (${selectedTemplate.code}) за ${formatPrice(selectedTemplate.price)}.`
    : "Здравствуйте! Хочу обсудить индивидуальный сайт.";

  useEffect(() => {
    dialogRef.current?.showModal();
    const previousBodyStyle = document.body.getAttribute("style");
    const scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    return () => {
      if (previousBodyStyle === null) document.body.removeAttribute("style");
      else document.body.setAttribute("style", previousBodyStyle);
      window.scrollTo({ top: scrollPosition, behavior: "instant" });
    };
  }, []);

  async function handleCopyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
      dialogRef.current?.querySelector("textarea")?.select();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal order-modal"
      aria-labelledby="order-title"
      onCancel={closeOrderModal}
      onClick={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.target === event.currentTarget &&
          (event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom)
        )
          closeOrderModal();
      }}
    >
      <button className="close" aria-label="Закрыть" onClick={closeOrderModal}>
        ×
      </button>
      <div className="order-content">
        <p className="eyebrow">
          {selectedTemplate ? "ВЫ ВЫБРАЛИ" : "ВАША ИСТОРИЯ НАЧИНАЕТСЯ"}
        </p>
        <h2 id="order-title">
          {selectedTemplate?.title ?? "Обсудим вашу идею"}
        </h2>
        {selectedTemplate && (
          <div className="order-selection">
            <span>
              {selectedCategory?.title}
              <small className="order-code">Код: {selectedTemplate.code}</small>
            </span>
            <strong>{formatPrice(selectedTemplate.price)}</strong>
          </div>
        )}
        <p>Как вам удобнее связаться?</p>
        <ContactLinks message={message} />
        <textarea
          aria-label="Сообщение для заказа"
          value={message}
          readOnly
          rows={3}
        />
        <button className="text-link copy-message" onClick={handleCopyMessage}>
          Скопировать сообщение
        </button>
        <span className="copy-feedback" role="status">
          {copyStatus === "copied"
            ? "Скопировано ✓"
            : copyStatus === "failed"
              ? "Выделили текст — скопируйте вручную."
              : ""}
        </span>
        {(!SITE_CONFIG.contacts.instagram ||
          !SITE_CONFIG.contacts.whatsapp) && (
          <small>
            Контакты пока подключены не полностью. Сообщение можно сохранить для
            заказа.
          </small>
        )}
      </div>
    </dialog>
  );
}
