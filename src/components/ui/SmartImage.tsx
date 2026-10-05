import Image from "next/image";
import type { ImageAsset } from "@/data/types";
import { cn } from "@/lib/cn";

interface SmartImageProps {
  image: ImageAsset;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  aspectRatio?: string;
}

export function SmartImage({
  image,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  className = "",
  fill = false,
}: SmartImageProps) {
  return (
    <div className={cn("relative overflow-hidden group", fill ? "w-full h-full" : "")}>
      <Image
        src={image.src}
        alt={image.alt}
        width={fill ? undefined : image.width}
        height={fill ? undefined : image.height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={cn("object-cover transition-transform duration-500", className)}
      />
      {image.credit && (
        <span className="absolute bottom-2 right-2 text-[10px] tracking-wider text-white/80 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded pointer-events-none z-10">
          {image.credit}
        </span>
      )}
    </div>
  );
}
