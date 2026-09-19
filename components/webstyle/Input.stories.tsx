import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'WebStyle-EXAMPLE/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    formTheme: {
      control: 'select',
      options: ['anuform', 'anuform-inline-tint', 'anuform-inline-black'],
      description: 'Form theme class applied to the wrapping `<form>` element',
    },
    labelWidth: {
      control: 'select',
      options: ['default', 'labelwide', 'labelfull'],
      description: 'Label column width modifier',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'HTML input type',
    },
    fieldWidth: {
      control: 'select',
      options: ['default', 'w45', 'w50', 'w60', 'w80', 'w100'],
      description: 'Width modifier for the field wrapper (effective in inline themes)',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required (adds red asterisk and HTML required attributes)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder / hint text inside the input',
    },
    instruction: {
      control: 'text',
      description: 'Instruction text rendered below the input',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes on the input element',
    },
    legend: {
      control: 'text',
      description: 'Optional section heading rendered as `<legend>` inside the `<fieldset>`',
    },
    value: { control: false },
    onChange: { control: false },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Fieldsets ---

export const WithLegend: Story = {
  args: {
    id: 'fieldset-with-legend',
    label: 'Name',
    legend: 'First heading',
    formTheme: 'anuform',
    placeholder: 'Your full name',
    required: true,
  },
};

export const WithoutLegend: Story = {
  args: {
    id: 'fieldset-no-legend',
    label: 'Name',
    formTheme: 'anuform',
    placeholder: 'Your full name',
  },
};

// --- Form themes ---

export const DefaultTheme: Story = {
  args: {
    id: 'requester-name',
    label: 'Name',
    formTheme: 'anuform',
    placeholder: 'Your full name',
  },
};

export const InlineTintTheme: Story = {
  args: {
    id: 'requester-name-tint',
    label: 'Name',
    formTheme: 'anuform-inline-tint',
    placeholder: 'Your full name',
  },
};

export const InlineBlackTheme: Story = {
  args: {
    id: 'requester-name-black',
    label: 'Name',
    formTheme: 'anuform-inline-black',
    placeholder: 'Your full name',
  },
};

// --- Labels ---

export const LabelDefault: Story = {
  args: {
    id: 'field-label-default',
    label: 'Name',
    formTheme: 'anuform',
    placeholder: 'Your full name',
  },
};

export const LabelWide: Story = {
  args: {
    id: 'field-label-wide',
    label: 'Name',
    formTheme: 'anuform',
    labelWidth: 'labelwide',
    placeholder: 'Your full name',
  },
};

export const LabelFull: Story = {
  args: {
    id: 'field-label-full',
    label: 'Name',
    formTheme: 'anuform',
    labelWidth: 'labelfull',
    placeholder: 'Your full name',
  },
};

// --- Required ---

export const RequiredField: Story = {
  args: {
    id: 'requester-required',
    label: 'Email address',
    formTheme: 'anuform',
    type: 'email',
    placeholder: 'example@example.com.au',
    required: true,
  },
};

// --- Input with placeholder ---

export const WithPlaceholder: Story = {
  args: {
    id: 'field-placeholder',
    label: 'Name',
    formTheme: 'anuform',
    placeholder: 'Your name',
  },
};

// --- Instruction text ---

export const WithInstruction: Story = {
  args: {
    id: 'field-instruction',
    label: 'URL',
    formTheme: 'anuform',
    placeholder: 'https://example.com',
    instruction: 'Do not include http://',
  },
};

// --- Short / narrow field (inline themes only) ---

export const ShortField: Story = {
  args: {
    id: 'field-short',
    label: 'Short field',
    formTheme: 'anuform-inline-black',
    placeholder: 'Short text',
    fieldWidth: 'w45',
  },
};
