import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "default" | "sm" | "lg";
  withArrow?: boolean;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  withArrow = true,
  external = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "min-h-[44px] px-5 text-sm rounded-full",
    default: "min-h-[52px] px-8 text-base rounded-full",
    lg: "min-h-[58px] px-10 text-lg rounded-full",
  };

  const variantStyles = {
    primary:
      "bg-[#8a5a32] hover:bg-[#6f4626] text-white shadow-sm hover:shadow-md border border-[#8a5a32]",
    secondary:
      "bg-[#efe8dd] hover:bg-[#d9cfc1] text-[#1f1b16] border border-[#d9cfc1]",
    outline:
      "bg-transparent hover:bg-[#efe8dd]/50 text-[#1f1b16] border border-[#d9cfc1]",
    whatsapp:
      "bg-[#128c4a] hover:bg-[#0e703b] text-white shadow-sm hover:shadow-md border border-[#128c4a]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
