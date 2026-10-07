import type { ReactNode } from "react";

// SVG не зависит от emoji-шрифтов iOS и наследует цвет текста.
function Icon({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <svg
      className={`svg-icon ${className}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}
export function ArrowUpRight() {
  return (
    <Icon className="icon-arrow-up-right">
      <path d="M7 17 17 7M7 7h10v10" />
    </Icon>
  );
}
export function ArrowLeft() {
  return (
    <Icon className="icon-arrow-left">
      <path d="M19 12H5m6-6-6 6 6 6" />
    </Icon>
  );
}
export function CloseIcon() {
  return (
    <Icon className="icon-close">
      <path d="m6 6 12 12M18 6 6 18" />
    </Icon>
  );
}
export function MenuIcon() {
  return (
    <Icon className="icon-menu">
      <path d="M4 8h16M4 16h16" />
    </Icon>
  );
}
export function CheckIcon() {
  return (
    <Icon className="icon-check">
      <path d="m5 12 4 4L19 6" />
    </Icon>
  );
}
export function SparkleIcon() {
  return (
    <Icon className="icon-ornament">
      <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" />
    </Icon>
  );
}
export function PlusIcon() {
  return (
    <Icon className="icon-plus">
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}
