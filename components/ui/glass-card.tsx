import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white/60 backdrop-blur-md border border-white rounded-3xl",
          "shadow-[0_2px_12px_rgba(0,0,0,0.06)]",
          hoverEffect && "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(255,107,43,0.15)]",
          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
