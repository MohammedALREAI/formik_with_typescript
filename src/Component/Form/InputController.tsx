import React, { ChangeEvent, ReactNode } from 'react'
import { ErrorSection } from './ErrorSection'
import { Field } from 'formik'

interface InputControllerProps {
    name?: string;
    label?: string;
    type?: string;
    errors?: string;
    defaultValue?: string;
    value?: string;
    touched?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    onBlur?: (e: React.FocusEvent<any, Element>) => any;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const InputController = (props: InputControllerProps) => {
    return (
        <div className="flex flex-col mb-6 ">
            <label htmlFor={props.name} className="pb-2 text-sm font-bold text-gray-800">
                {props.label}
            </label>
            <div className={`border border-bg${props.errors ? 'red' : 'green'}-400 shadow-sm rounded flex`}>
                <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r-0 border-green-400">
                    {props.icon}
                </div>
                <input
                    onChange={props.onChange}
                    type={props.type}
                    defaultValue={props.defaultValue}
                    value={props.value}
                    id={props.name}
                    name={props.name}
                    onBlur={props.onBlur}
                    required
                    className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400"
                    placeholder={props.placeholder}
                />
                <div className="text-red-600 px-2 flex justify-center items-center">*</div>
            </div>
            <ErrorSection errors={props.errors} touched={props.touched} />
        </div>
    )
}
