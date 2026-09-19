import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "cn"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("storybook:flex storybook:w-full storybook:flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("storybook:not-last:border-b", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="storybook:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "storybook:group/accordion-trigger storybook:relative storybook:flex storybook:flex-1 storybook:items-start storybook:justify-between storybook:rounded-lg storybook:border storybook:border-transparent storybook:py-2.5 storybook:text-left storybook:text-sm storybook:font-medium storybook:transition-all storybook:outline-none storybook:hover:underline storybook:focus-visible:border-ring storybook:focus-visible:ring-3 storybook:focus-visible:ring-ring/50 storybook:focus-visible:after:border-ring storybook:aria-disabled:pointer-events-none storybook:aria-disabled:opacity-50 storybook:**:data-[slot=accordion-trigger-icon]:ml-auto storybook:**:data-[slot=accordion-trigger-icon]:size-4 storybook:**:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
        <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} data-slot="accordion-trigger-icon" className="storybook:pointer-events-none storybook:shrink-0 storybook:group-aria-expanded/accordion-trigger:hidden" />
        <HugeiconsIcon icon={ArrowUp01Icon} strokeWidth={2} data-slot="accordion-trigger-icon" className="storybook:pointer-events-none storybook:hidden storybook:shrink-0 storybook:group-aria-expanded/accordion-trigger:inline" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="storybook:overflow-hidden storybook:text-sm storybook:data-open:animate-accordion-down storybook:data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "storybook:h-(--accordion-panel-height) storybook:pt-0 storybook:pb-2.5 storybook:data-ending-style:h-0 storybook:data-starting-style:h-0 storybook:[&_a]:underline storybook:[&_a]:underline-offset-3 storybook:[&_a]:hover:text-foreground storybook:[&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
