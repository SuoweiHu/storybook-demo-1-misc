import { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Button } from './button';


const meta: Meta<typeof Button> = {
    title: 'ShadCN-EXAMPLE-UI/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: { type: 'radio' },
            options: ['default', 'xs', 'sm', 'lg'],
        },
    }
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Default : Story = {
    args: {
        variant: "default",
        size: "default",
        onClick: fn().mockName("onClick handler"),
        onMouseEnter: fn().mockName("onMouseEnter handler"),
        disabled: false,
        children: "Hello World",
        className: "hover:cursor-pointer"
    }
}
export const Destructive : Story = {
    args: {
        ...Default.args,
        variant: "destructive"
    }
}
export const Secondary : Story = {
    args: {
        ...Default.args,
        variant: "secondary",
    }
}