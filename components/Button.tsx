import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function Button({
  children,
  href = "#contact",
  variant = "light",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-200";
  const variants = {
    light: "bg-white text-black hover:bg-zinc-200",
    dark: "bg-black text-white hover:bg-zinc-900",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} href={href}>
      {children}
    </a>
  );
}
