import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface TransitionNoticeProps {
  title: string;
  body: string;
}

export function TransitionNotice({ title, body }: TransitionNoticeProps) {
  return (
    <div className="py-6 bg-[#efe8dd]/80 border-b border-[#d9cfc1]">
      <Container size="narrow">
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 border border-[#d9cfc1]/80 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#8a5a32]/10 text-[#8a5a32] flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold text-[#1f1b16] mb-1">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-[#4a443c] leading-relaxed">
              {body}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
