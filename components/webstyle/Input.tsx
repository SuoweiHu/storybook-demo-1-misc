import React from 'react';
import './src/styles/css/export.css';
import './src/styles/js/dist/export.js';

export type FormTheme = 'anuform' | 'anuform-inline-tint' | 'anuform-inline-black';
export type LabelWidth = 'default' | 'labelwide' | 'labelfull';
export type FieldWidth = 'default' | 'w45' | 'w50' | 'w60' | 'w80' | 'w100';

export interface InputProps {
    /** Unique id for the input (also used as the label's `for` attribute) */
    id: string;
    /** Label text displayed above / beside the input */
    label: string;
    /** Optional section heading rendered as `<legend>` inside the `<fieldset>`. The form
     *  styling makes it match the heading colours on the rest of your site. */
    legend?: string;
    /** Form theme class applied to the wrapping `<form>` element */
    formTheme?: FormTheme;
    /** Label-column width modifier applied to the wrapping `<form>` element */
    labelWidth?: LabelWidth;
    /** HTML input type */
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
    /** Placeholder / hint text inside the input */
    placeholder?: string;
    /** When true, adds the `req` class to the label and `required` / `aria-required` to the input */
    required?: boolean;
    /** Optional instruction text rendered below the input with class `instruction` */
    instruction?: string;
    /** Width modifier applied to the `.field` wrapper (only effective in inline form themes) */
    fieldWidth?: FieldWidth;
    /** Additional CSS classes for the input element */
    className?: string;
    /** Current value (controlled) */
    value?: string;
    /** Change handler */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
    id,
    label,
    legend,
    formTheme = 'anuform',
    labelWidth = 'default',
    type = 'text',
    placeholder,
    required = false,
    instruction,
    fieldWidth = 'default',
    className = '',
    value,
    onChange,
}) => {
    const formClass = [
        formTheme,
        labelWidth !== 'default' ? labelWidth : '',
        'pb-0',
    ]
        .filter(Boolean)
        .join(' ');

    const fieldClass = [
        'field',
        fieldWidth !== 'default' ? fieldWidth : '',
    ]
        .filter(Boolean)
        .join(' ');

    const inputClass = ['text', 'tfull', className].filter(Boolean).join(' ');

    return (
        <form className={formClass}>
            <fieldset>
                {legend && <legend>{legend}</legend>}
                <div className={fieldClass}>
                    <label className={required ? 'req' : undefined} htmlFor={id}>
                        {label}
                    </label>
                    <div className="field-span">
                        <input
                            type={type}
                            className={inputClass}
                            id={id}
                            name={id}
                            placeholder={placeholder}
                            required={required || undefined}
                            aria-required={required || undefined}
                            value={value}
                            onChange={onChange}
                        />
                        {instruction && <p className="instruction">{instruction}</p>}
                    </div>
                </div>
            </fieldset>
        </form>
    );
};
