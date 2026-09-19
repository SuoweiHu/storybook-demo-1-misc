import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "storybook:group/button storybook:inline-flex storybook:shrink-0 storybook:items-center storybook:justify-center storybook:rounded-lg storybook:border storybook:border-transparent storybook:bg-clip-padding storybook:text-sm storybook:font-medium storybook:whitespace-nowrap storybook:transition-all storybook:outline-none storybook:select-none storybook:focus-visible:border-ring storybook:focus-visible:ring-3 storybook:focus-visible:ring-ring/50 storybook:active:not-aria-[haspopup]:translate-y-px storybook:disabled:pointer-events-none storybook:disabled:opacity-50 storybook:aria-invalid:border-destructive storybook:aria-invalid:ring-3 storybook:aria-invalid:ring-destructive/20 storybook:dark:aria-invalid:border-destructive/50 storybook:dark:aria-invalid:ring-destructive/40 storybook:[&_svg]:pointer-events-none storybook:[&_svg]:shrink-0 storybook:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "storybook:bg-primary storybook:text-primary-foreground storybook:hover:bg-primary/80",
        outline:
          "storybook:border-border storybook:bg-background storybook:hover:bg-muted storybook:hover:text-foreground storybook:aria-expanded:bg-muted storybook:aria-expanded:text-foreground storybook:dark:border-input storybook:dark:bg-input/30 storybook:dark:hover:bg-input/50",
        secondary:
          "storybook:bg-secondary storybook:text-secondary-foreground storybook:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] storybook:aria-expanded:bg-secondary storybook:aria-expanded:text-secondary-foreground",
        ghost:
          "storybook:hover:bg-muted storybook:hover:text-foreground storybook:aria-expanded:bg-muted storybook:aria-expanded:text-foreground storybook:dark:hover:bg-muted/50",
        destructive:
          "storybook:bg-destructive/10 storybook:text-destructive storybook:hover:bg-destructive/20 storybook:focus-visible:border-destructive/40 storybook:focus-visible:ring-destructive/20 storybook:dark:bg-destructive/20 storybook:dark:hover:bg-destructive/30 storybook:dark:focus-visible:ring-destructive/40",
        link: "storybook:text-primary storybook:underline-offset-4 storybook:hover:underline",
      },
      size: {
        default:
          "storybook:h-8 storybook:gap-1.5 storybook:px-2.5 storybook:has-data-[icon=inline-end]:pr-2 storybook:has-data-[icon=inline-start]:pl-2",
        xs: "storybook:h-6 storybook:gap-1 storybook:rounded-[min(var(--radius-md),10px)] storybook:px-2 storybook:text-xs storybook:in-data-[slot=button-group]:rounded-lg storybook:has-data-[icon=inline-end]:pr-1.5 storybook:has-data-[icon=inline-start]:pl-1.5 storybook:[&_svg:not([class*=size-])]:size-3",
        sm: "storybook:h-7 storybook:gap-1 storybook:rounded-[min(var(--radius-md),12px)] storybook:px-2.5 storybook:text-[0.8rem] storybook:in-data-[slot=button-group]:rounded-lg storybook:has-data-[icon=inline-end]:pr-1.5 storybook:has-data-[icon=inline-start]:pl-1.5 storybook:[&_svg:not([class*=size-])]:size-3.5",
        lg: "storybook:h-9 storybook:gap-1.5 storybook:px-2.5 storybook:has-data-[icon=inline-end]:pr-2 storybook:has-data-[icon=inline-start]:pl-2",
        icon: "storybook:size-8",
        "icon-xs":
          "storybook:size-6 storybook:rounded-[min(var(--radius-md),10px)] storybook:in-data-[slot=button-group]:rounded-lg storybook:[&_svg:not([class*=size-])]:size-3",
        "icon-sm":
          "storybook:size-7 storybook:rounded-[min(var(--radius-md),12px)] storybook:in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "storybook:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
