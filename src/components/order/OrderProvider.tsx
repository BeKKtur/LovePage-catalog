"use client";
import { createContext, useContext, useState } from "react";
import type { Template } from "@/data/templates";
import { OrderModal } from "./OrderModal";

const OrderContext = createContext<{
  openOrderModal: (template?: Template) => void;
}>({ openOrderModal: () => {} });
export const useOrder = () => useContext(OrderContext);

// Все кнопки заказа передают выбранный шаблон в одно общее окно.
export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [selectedOrder, setSelectedOrder] = useState<{
    template?: Template;
  } | null>(null);
  function openOrderModal(template?: Template) {
    setSelectedOrder({ template });
  }
  function closeOrderModal() {
    setSelectedOrder(null);
  }
  return (
    <OrderContext.Provider value={{ openOrderModal }}>
      {children}
      {selectedOrder && (
        <OrderModal
          selectedTemplate={selectedOrder.template}
          closeOrderModal={closeOrderModal}
        />
      )}
    </OrderContext.Provider>
  );
}
export function OrderButton({
  template,
  children,
  className = "button",
}: {
  template?: Template;
  children: React.ReactNode;
  className?: string;
}) {
  const { openOrderModal } = useOrder();
  return (
    <button className={className} onClick={() => openOrderModal(template)}>
      {children}
    </button>
  );
}
