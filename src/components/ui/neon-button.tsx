import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const neonButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        neon: "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 dark:shadow-[0_0_20px_hsl(var(--primary)/0.5)] dark:hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] dark:border dark:border-primary/20",
        "neon-outline": "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground backdrop-blur-sm bg-background/80 dark:shadow-[0_0_15px_hsl(var(--primary)/0.3)] dark:hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] dark:border-primary/50 dark:hover:border-primary",
        "neon-secondary": "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:-translate-y-0.5 dark:shadow-[0_0_15px_hsl(var(--secondary)/0.3)] dark:hover:shadow-[0_0_25px_hsl(var(--secondary)/0.5)] dark:border dark:border-secondary/20"
      },
      size: {
        default: "h-12 px-8 py-4",
        sm: "h-9 px-6 py-2",
        lg: "h-14 px-10 py-5",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "neon",
      size: "default",
    },
  }
)

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neonButtonVariants> {
  asChild?: boolean
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    return (
      <Comp
        className={cn(neonButtonVariants({ variant, size, className }))}
        ref={asChild ? undefined : ref}
        {...props}
      />
    )
  }
)
NeonButton.displayName = "NeonButton"

export { NeonButton, neonButtonVariants }