import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        isCenter ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3",
            isDark ? "text-[#a3af97]" : "text-[#6f7a64]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] mb-4",
          isDark ? "text-white" : "text-[#1f1b16]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg lg:text-xl leading-relaxed",
            isCenter && "max-w-2xl mx-auto",
            isDark ? "text-[#d9cfc1]" : "text-[#4a443c]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
