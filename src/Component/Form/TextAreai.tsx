import React, { ReactNode } from 'react'
import { ErrorSection } from './ErrorSection'
import { Field } from 'formik'

interface Props {
    name?: string;
    label?: string;
    errors?: string;
    defaultValue?: boolean;
    touched?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    value?:string
    onBlur?: (e: React.FocusEvent<any, Element>) => any;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}


export const TextAreai = (props: Props) => {
    return (
        <div className="my-4 flex flex-col w-full container  mx-auto">
            <textarea
            autoCorrect='true'
                id={props.name}
                name={props.name}
                required
                value={props.value}
                className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-y placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder={props.placeholder}
                rows={5}
                defaultValue={props.placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            <div className="text-red-600 px-2 flex justify-center items-center">*</div>

            <ErrorSection errors={props.errors} touched={props.touched} />
        </div>
    )
}
