"use client";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/shared/Icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/config/site";
import { categories } from "@/data/categories";
import { OrderButton } from "@/components/order/OrderProvider";
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const menu = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) {
      menu.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      menu.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const links = (
    <>
      <Link
        href="/"
        onClick={() => setOpen(false)}
        aria-current={path === "/" ? "page" : undefined}
      >
        Главная
      </Link>
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/${c.slug}`}
          onClick={() => setOpen(false)}
          aria-current={path === `/${c.slug}` ? "page" : undefined}
        >
          {c.label}
        </Link>
      ))}
      <Link href="/custom" onClick={() => setOpen(false)}>
        Индивидуальный
      </Link>
    </>
  );
  return (
    <>
      <header className="header">
        <Link className="brand" href="/">
          {SITE_CONFIG.brandName}
          <span>digital atelier</span>
        </Link>
        <nav className="desktop-nav">{links}</nav>
        <OrderButton className="header-order">
          Заказать <ArrowUpRight />
        </OrderButton>
        <button
          className="burger"
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </header>
      <dialog
        ref={menu}
        className="mobile-menu"
        onCancel={() => setOpen(false)}
      >
        <div className="menu-top">
          <span className="brand">{SITE_CONFIG.brandName}</span>
          <button
            className="close"
            aria-label="Закрыть меню"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <p className="eyebrow">ДЛЯ ВАШИХ ОСОБЕННЫХ МОМЕНТОВ</p>
        <nav>{links}</nav>
        <p className="menu-bottom">Маленькая ссылка. Большая история.</p>
      </dialog>
    </>
  );
}
