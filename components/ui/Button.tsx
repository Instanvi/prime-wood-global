"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none cursor-pointer select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#d5920c] text-white hover:bg-[#b87b08] shadow-md hover:shadow-lg hover:shadow-[#d5920c]/25 border border-[#e5a118]/30",
        default:
          "bg-[#d5920c] text-white hover:bg-[#b87b08] shadow-md hover:shadow-lg hover:shadow-[#d5920c]/25 border border-[#e5a118]/30",
        forest:
          "bg-[#032f0e] text-white hover:bg-[#0a461b] shadow-md hover:shadow-lg hover:shadow-[#032f0e]/30 border border-[#145e28]/50",
        outline:
          "bg-white/90 backdrop-blur-md text-[#0d1a13] border border-gray-300 hover:border-[#032f0e] hover:bg-white hover:text-[#032f0e] shadow-xs",
        outlineGold:
          "bg-white/10 backdrop-blur-md text-white border border-[#d5920c]/70 hover:bg-[#d5920c] hover:text-white shadow-xs",
        outlineWhite:
          "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 hover:border-white shadow-xs",
        ghost:
          "text-gray-700 hover:text-[#032f0e] hover:bg-gray-100/80",
        dark:
          "bg-[#06180e] text-white hover:bg-[#0c2618] border border-[#183825] shadow-xs",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20ba59] shadow-md hover:shadow-lg hover:shadow-[#25D366]/25 font-bold",
      },
      size: {
        default: "h-11 px-5 py-2.5 text-sm rounded-lg",
        sm: "h-9 px-3.5 text-xs rounded-md",
        lg: "h-12 px-6 text-sm sm:text-base rounded-lg font-bold tracking-tight",
        xl: "h-14 px-8 text-base sm:text-lg rounded-xl font-bold tracking-tight",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, target, rel, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export default Button;
