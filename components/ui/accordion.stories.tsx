import { Meta, StoryObj } from '@storybook/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './accordion';

const meta : Meta<typeof Accordion> = {
    title: 'ShadCN-EXAMPLE/UI/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },
}

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    render: () => {
        return (
            <Accordion className="w-100">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Storybook?</AccordionTrigger>
                    <AccordionContent>
                        Storybook is a tool for building and documenting UI components
                        in isolation.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Why use an accordion?</AccordionTrigger>
                    <AccordionContent>
                        Accordions organize related content into collapsible sections.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize it?</AccordionTrigger>
                    <AccordionContent>
                        Yes. Pass a className or other supported props to customize the
                        accordion and its items.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    }
};

export const Default_with_Interaction: Story = {
    render: () => {
        return (
            <Accordion className="w-100">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Storybook?</AccordionTrigger>
                    <AccordionContent>
                        Storybook is a tool for building and documenting UI components
                        in isolation.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Why use an accordion?</AccordionTrigger>
                    <AccordionContent>
                        Accordions organize related content into collapsible sections.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize it?</AccordionTrigger>
                    <AccordionContent>
                        Yes. Pass a className or other supported props to customize the
                        accordion and its items.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    },
    play: async ({ canvas, userEvent }) => {
        const expand_button = canvas.getByText('What is Storybook?', {
            selector: 'button',
        });
        await userEvent.click(expand_button);
        await userEvent.tab();
        await userEvent.keyboard('{Enter}');
        await userEvent.tab();
        await userEvent.keyboard('{Enter}');
        await userEvent.keyboard('{Escape}');
    }
};

export const Expanded_One: Story = {
    render: () => {
        return (
            <Accordion className="w-100" defaultValue={["item-1"]}>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Storybook?</AccordionTrigger>
                    <AccordionContent>
                        Storybook is a tool for building and documenting UI components
                        in isolation.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Why use an accordion?</AccordionTrigger>
                    <AccordionContent>
                        Accordions organize related content into collapsible sections.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize it?</AccordionTrigger>
                    <AccordionContent>
                        Yes. Pass a className or other supported props to customize the
                        accordion and its items.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    },
};

export const Expanded_All: Story = {
    render: () => {
        return (
            <Accordion className="w-100" defaultValue={["item-1", "item-2", "item-3"]}>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Storybook?</AccordionTrigger>
                    <AccordionContent>
                        Storybook is a tool for building and documenting UI components
                        in isolation.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Why use an accordion?</AccordionTrigger>
                    <AccordionContent>
                        Accordions organize related content into collapsible sections.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize it?</AccordionTrigger>
                    <AccordionContent>
                        Yes. Pass a className or other supported props to customize the
                        accordion and its items.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    },
};

export const Multiple: Story = {
    render: () => {
        return (
            <Accordion className="w-100" multiple>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Storybook?</AccordionTrigger>
                    <AccordionContent>
                        Storybook is a tool for building and documenting UI components
                        in isolation.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Why use an accordion?</AccordionTrigger>
                    <AccordionContent>
                        Accordions organize related content into collapsible sections.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize it?</AccordionTrigger>
                    <AccordionContent>
                        Yes. Pass a className or other supported props to customize the
                        accordion and its items.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    }
};


export const Disabed: Story = {
    render: () => {
        return (
            <Accordion className="w-100" disabled>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Storybook?</AccordionTrigger>
                    <AccordionContent>
                        Storybook is a tool for building and documenting UI components
                        in isolation.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Why use an accordion?</AccordionTrigger>
                    <AccordionContent>
                        Accordions organize related content into collapsible sections.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize it?</AccordionTrigger>
                    <AccordionContent>
                        Yes. Pass a className or other supported props to customize the
                        accordion and its items.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    },
};


export const Border: Story = {
    render: () => {
        return (
            <Accordion className="w-100 border rounded-lg">
                <AccordionItem value="item-1" className="px-4 last:border-b-0">
                    <AccordionTrigger>What is Storybook?</AccordionTrigger>
                    <AccordionContent>
                        Storybook is a tool for building and documenting UI components
                        in isolation.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="px-4 last:border-b-0">
                    <AccordionTrigger>Why use an accordion?</AccordionTrigger>
                    <AccordionContent>
                        Accordions organize related content into collapsible sections.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="px-4 last:border-b-0">
                    <AccordionTrigger>Can I customize it?</AccordionTrigger>
                    <AccordionContent>
                        Yes. Pass a className or other supported props to customize the
                        accordion and its items.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    },
};