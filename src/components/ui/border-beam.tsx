import { cn } from "@/lib/utils"

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  borderWidth?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
  reverse?: boolean
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
  reverse = false,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        className
      )}
      style={
        {
          "--border-width": borderWidth,
          "--size": size,
          "--duration": duration,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] [mask-clip:padding-box,border-box] [mask-composite:intersect]",
          "before:absolute before:aspect-square before:w-[calc(var(--size)*1px)] before:animate-border-beam before:[animation-delay:var(--delay)] before:[animation-direction:reverse] before:[animation-duration:calc(var(--duration)*1s)] before:[background:linear-gradient(to_right,var(--color-from),var(--color-to),transparent)] before:[offset-anchor:calc(var(--size)*0.5*-1px)_calc(var(--size)*0.5*-1px)]",
          reverse && "before:[animation-direction:normal]"
        )}
      />
    </div>
  )
}