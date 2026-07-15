import * as React from "react"
import { cn } from "@/lib/utils"
import * as motion from "framer-motion/client"

interface SectionTitleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: string | React.ReactNode
  subtitle?: string | React.ReactNode
  align?: "left" | "center"
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "text-center items-center" : "text-left items-start",
        className
      )}
      {...props}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold leading-tight text-text-dark max-w-2xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[15px] md:text-base text-text-soft font-normal max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
