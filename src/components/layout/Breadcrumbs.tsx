import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface BreadcrumbsProps {
  items: Array<{ label: string; href?: string }>;
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="pt-24 pb-4 bg-[#faf7f2] border-b border-[#efe8dd]">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#4a443c]">
            <li>
              <Link
                href="/"
                className="hover:text-[#8a5a32] transition-colors"
              >
                Home
              </Link>
            </li>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#d9cfc1]" />
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-[#8a5a32] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#1f1b16] font-medium" aria-current={isLast ? "page" : undefined}>
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
