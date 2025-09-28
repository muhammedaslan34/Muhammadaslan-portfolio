import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CardHoverEffectProps {
  icon?: ReactNode
  title: string
  description: string
  variant?: 'purple' | 'blue' | 'amber' | 'rose' | 'default'
  glowEffect?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const variantStyles = {
  purple: {
    gradient: "from-purple-500/20 to-purple-500/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    titleGradient: "from-purple-500/90 to-purple-500/70",
    glow: "group-hover:shadow-purple-500/25"
  },
  blue: {
    gradient: "from-blue-500/20 to-blue-500/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    titleGradient: "from-blue-500/90 to-blue-500/70",
    glow: "group-hover:shadow-blue-500/25"
  },
  amber: {
    gradient: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    titleGradient: "from-amber-500/90 to-amber-500/70",
    glow: "group-hover:shadow-amber-500/25"
  },
  rose: {
    gradient: "from-rose-500/20 to-rose-500/5",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
    titleGradient: "from-rose-500/90 to-rose-500/70",
    glow: "group-hover:shadow-rose-500/25"
  },
  default: {
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    titleGradient: "from-accent/90 to-accent/70",
    glow: "group-hover:shadow-accent/25"
  }
}

const sizeStyles = {
  sm: {
    card: "p-4",
    icon: "h-10 w-10",
    iconSize: "h-5 w-5",
    title: "text-lg",
    description: "text-sm"
  },
  md: {
    card: "p-6",
    icon: "h-12 w-12",
    iconSize: "h-6 w-6",
    title: "text-xl",
    description: "text-sm"
  },
  lg: {
    card: "p-8",
    icon: "h-16 w-16",
    iconSize: "h-8 w-8",
    title: "text-2xl",
    description: "text-base"
  }
}

export function CardHoverEffect({
  icon,
  title,
  description,
  variant = 'default',
  glowEffect = false,
  size = 'md',
  className
}: CardHoverEffectProps) {
  const styles = variantStyles[variant]
  const sizeStyle = sizeStyles[size]

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:scale-105",
        styles.gradient,
        sizeStyle.card,
        glowEffect && `hover:shadow-2xl ${styles.glow}`,
        "hover:-translate-y-1",
        className
      )}
    >
      {/* Glow effect */}
      {glowEffect && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
      )}
      
      {/* Icon */}
      {icon && (
        <div className={cn(
          "mb-4 flex items-center justify-center rounded-xl backdrop-blur-sm",
          styles.iconBg,
          sizeStyle.icon
        )}>
          <div className={cn(styles.iconColor, sizeStyle.iconSize)}>
            {icon}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <h3 className={cn(
          "mb-3 bg-gradient-to-r bg-clip-text font-bold text-transparent",
          styles.titleGradient,
          sizeStyle.title
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-muted-foreground leading-relaxed",
          sizeStyle.description
        )}>
          {description}
        </p>
      </div>
    </div>
  )
}