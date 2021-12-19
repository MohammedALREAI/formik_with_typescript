import React, { ChangeEvent, ReactNode } from 'react'
import { ErrorSection } from './ErrorSection'
import { FormikErrors, FormikTouched } from 'formik'

interface InputDateControllerProps {
    name?: string;
    label?: string;
    type?: 'text' | 'date'
    errors?: FormikErrors<Date> | FormikErrors<string>
    defaultValue?: string | Date | any;
    value?: string | Date | any ;
    touched?: FormikTouched<Date> | FormikTouched<string>;
    placeholder?: string;
    icon?: ReactNode;
    onBlur?: (e: React.FocusEvent<any, Element>) => any;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const InputDateController = ({ type = 'date', ...props }: InputDateControllerProps) => {
return (
        <div className="flex flex-col mb-6 ">
            <label htmlFor={props.name} className="pb-2 text-sm font-bold text-gray-800">
                {props.label}
            </label>
            <div className={`border border-bg${props.errors && props.touched ? 'red' : 'green'}-400 shadow-sm rounded flex`}>
                <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r-0 border-green-400">
                    {props.icon}
                </div>
                <input
                    onChange={props.onChange}
                    type={type === 'date' && props.touched ? 'date' : 'text'}
                    defaultValue={new Date(props.defaultValue).toString().slice(3, 15)}
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
            <ErrorSection errors={props.errors ? props.errors : undefined} touched={props.touched} />
        </div>
    )
}
