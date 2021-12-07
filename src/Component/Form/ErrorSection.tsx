import { FormikErrors, FormikTouched } from 'formik'
import React from 'react'

import { BiErrorAlt } from 'react-icons/bi'

interface Props {
    touched?: FormikTouched<any> | FormikTouched<string> | FormikTouched<number> | boolean;
    errors?: FormikErrors<Date | any> | string
}

export const ErrorSection = (props: Props) => {
    console.log('test', props.touched, props.errors)
    if (props.touched && props.errors) {
        return (
            <div className="flex justify-between items-center pt-1 text-red-400">
                <p className="text-xs">{props.errors}</p>
                <BiErrorAlt />
            </div>
        )
    } else return <></>
}
