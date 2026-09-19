import type { Meta, StoryObj } from '@storybook/react';
import { Message } from './Message';

const meta = {
  title: 'WebStyle-EXAMPLE/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['error', 'warn', 'info', 'success', 'inline'],
      description: 'The style type of the message',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
        control: false,
        tabel: {
            disable: true,
        }
    }
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorMessage: Story = {

  args: {
    type: 'error',
    children: '<p class="msg-error"> ... </p>',
  },
};

export const WarningMessage: Story = {
  args: {
    type: 'warn',
    children: '<p class="msg-warn"> ... </p>',
  },
};

export const InformationMessage: Story = {
  args: {
    type: 'info',
    children: '<p class="msg-info"> ... </p>',
  },
};

export const SuccessMessage: Story = {
  args: {
    type: 'success',
    children: '<p class="msg-success"> ... </p>',
  },
};

export const InlineMessage: Story = {
  args: {
    type: 'inline',
    children: '<p class="msg-inline"> ... </p>',
  },
};

export const CustomFontAndColor: Story = {
  args: {
    type: 'error',
    className: 'large',
    children: 'This is a larger error message. Note that please don\'t use gold or white text on any message, because the combinations, will not pass WCAG 2.1.',
  },
};

export const CustomColor: Story = {
  args: {
    type: 'info',
    className: 'text-unigrey',
    children: 'This is a normal-size error message with dark grey text.',
  },
};

export const CustomWidth: Story = {
  args: {
    type: 'info',
    className: 'w80',
    children: 'This is a message with class `w80`, which makes the width of this message will always be 80% wide of its parent container.',
  },
};
