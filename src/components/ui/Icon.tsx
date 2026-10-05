import React from "react";
import type { IconName } from "@/data/types";
import {
  Ear,
  ScanLine,
  Box,
  Hammer,
  Layers,
  Droplets,
  Cog,
  Gem,
  Leaf,
  Trees,
  Ruler,
  Users,
  ShieldCheck,
  Sparkles,
  ParkingCircle,
  UserRound,
  Store,
  Clock,
  Hotel,
  Coffee,
  Briefcase,
  ShoppingBag,
  HelpCircle,
} from "lucide-react";

interface IconProps {
  name: IconName | string;
  className?: string;
  size?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Ear,
  ScanLine,
  Box,
  Hammer,
  Layers,
  Droplets,
  Cog,
  Gem,
  Leaf,
  Trees,
  Ruler,
  Users,
  ShieldCheck,
  Sparkles,
  ParkingCircle,
  UserRound,
  Store,
  Clock,
  Hotel,
  Coffee,
  Briefcase,
  ShoppingBag,
};

export function Icon({ name, className = "w-5 h-5", size }: IconProps) {
  const Component = iconMap[name] || HelpCircle;
  return <Component className={className} size={size} />;
}
