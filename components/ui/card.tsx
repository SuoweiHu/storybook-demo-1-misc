import * as React from "react"
import { cn } from "cn"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "storybook:group/card storybook:flex storybook:flex-col storybook:gap-(--card-spacing) storybook:overflow-hidden storybook:rounded-xl storybook:bg-card storybook:py-(--card-spacing) storybook:text-sm storybook:text-card-foreground storybook:ring-1 storybook:ring-foreground/10 storybook:[--card-spacing:--spacing(4)] storybook:has-data-[slot=card-footer]:pb-0 storybook:has-[>img:first-child]:pt-0 storybook:data-[size=sm]:[--card-spacing:--spacing(3)] storybook:data-[size=sm]:has-data-[slot=card-footer]:pb-0 storybook:*:[img:first-child]:rounded-t-xl storybook:*:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "storybook:group/card-header storybook:@container/card-header storybook:grid storybook:auto-rows-min storybook:items-start storybook:gap-1 storybook:rounded-t-xl storybook:px-(--card-spacing) storybook:has-data-[slot=card-action]:grid-cols-[1fr_auto] storybook:has-data-[slot=card-description]:grid-rows-[auto_auto] storybook:[.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "storybook:font-heading storybook:text-base storybook:leading-snug storybook:font-medium storybook:group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("storybook:text-sm storybook:text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "storybook:col-start-2 storybook:row-span-2 storybook:row-start-1 storybook:self-start storybook:justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("storybook:px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "storybook:flex storybook:items-center storybook:rounded-b-xl storybook:border-t storybook:bg-muted/50 storybook:p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
