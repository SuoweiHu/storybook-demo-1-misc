import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card, CardContent, CardDescription, CardAction, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';

const meta: Meta<typeof Card> = {
    title: "ShadCN-Example/UI/Card",
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },
    argTypes: {
        size: {
            name: 'Size',
            control: 'radio',
            options: ['default', 'sm'],
            description: 'The size of the card, controlling the internal spacing.'
        }
    },
    args: {
        size: "default",
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    argTypes: {
        titleText: {
            name: 'Title Text',
            control: 'text',
            description: 'Text for the card title'
        },
        descriptionText: {
            name: 'Description Text',
            control: 'text',
            description: 'Text for the card description'
        },
        bodyText: {
            name: 'Body Text',
            control: 'text',
            description: 'Text for the card body content'
        },
        primaryButtonText: {
            name: 'Primary Button Text',
            control: 'text',
            description: 'Text for the primary action button'
        },
        secondaryButtonText: {
            name: 'Secondary Button Text',
            control: 'text',
            description: 'Text for the secondary action button'
        },
        className: {
            name: 'Class Name',
            control: 'text',
            description: 'Additional class names to apply to the card'
        }
    },
    args: {
        className: "max-w-[350px] w-full",
        titleText: "Create project",
        descriptionText: "Deploy your new project in one-click.",
        bodyText: "Select a framework and connect your repository.",
        primaryButtonText: "Deploy",
        secondaryButtonText: "Cancel",
    },
    render: (args: any) => (
        <Card className={args.className} size={args.size}>
            <CardHeader>
                <CardTitle>{args.titleText}</CardTitle>
                <CardDescription>{args.descriptionText}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{args.bodyText}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">{args.secondaryButtonText}</Button>
                <Button>{args.primaryButtonText}</Button>
            </CardFooter>
        </Card>
    )
};

export const Small: Story = {
    argTypes: {
        ...Default.argTypes,
    },
    args: {
        ...Default.args,
        size: "sm",
    },
    render: Default.render
};

export const WithAction: Story = {
    args: {
        className: "w-[350px]",
        children: (
            <>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>You have 3 unread messages.</CardDescription>
                    <CardAction>
                        <Button variant="secondary" size="sm">Mark all read</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <p className="text-sm">Your call has been confirmed.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <p className="text-sm">You have a new message!</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">View all notifications</Button>
                </CardFooter>
            </>
        )
    }
};

export const WithImage: Story = {
    argTypes: {
        imageUpload: {
            name: 'Upload Image',
            control: { type: 'file', accept: '.png, .jpg, .jpeg, .webp, .gif' },
            description: 'Upload an image file to test in the card',
        }
    },
    args: {
        className: "w-[350px]",
    },
    render: (args: any) => {
        // Storybook file control provides an array of base64 string Data URLs
        const imageSrc = Array.isArray(args.imageUpload) && args.imageUpload.length > 0
            ? args.imageUpload[0]
            : "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80";

        return (
            <Card className={args.className} size={args.size}>
                <img
                    src={imageSrc}
                    alt="Card image"
                    className="aspect-video object-cover"
                    width={800}
                    height={400}
                />
                <CardHeader>
                    <CardTitle>Card with Image</CardTitle>
                    <CardDescription>The image automatically gets rounded corners at the top.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Adding an img element as the first child of the Card will automatically round its top corners and remove the top padding.
                    </p>
                </CardContent>
            </Card>
        );
    }
};