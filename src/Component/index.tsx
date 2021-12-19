import React, { useEffect, useState } from 'react'
import { FormikHelpers, useFormik } from 'formik'
import { IExperince, validationSchema } from '../utils/validation'

import { InputController } from './Form/InputController'
import { SelectReact } from './Form/SelectReact'
import { jobField, jobTitle, TOption, TOptions } from '../utils/listCont'

import { MdDateRange } from 'react-icons/md'
import { BiCompass, BiLocationPlus } from 'react-icons/bi'
import { CheckBox } from './Form/CheackBook'
import { TextAreai } from './Form/TextAreai'
import { InputDateController } from './Form/DateInput'
import { ListItem } from './Form/ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { allActionExperience } from '../redux/formik/action'
import { AppState } from '../redux/store'


export const IndexForm = () => {
    const experiences = useSelector((state:AppState) => state.formik.experiences)
    console.log('state', experiences)
    const [isEditable, setIsEditable] = useState<boolean>(false)

    const [editValue, setEditValue] = useState<IExperince>({}as IExperince)


    const initialValues:IExperince = {
        title: isEditable ? editValue.title : '',
        field: isEditable ? editValue.field : '',
        location: isEditable ? editValue.location : '',
        startDate: isEditable ? editValue.startDate : new Date(),
        currently: isEditable ? editValue.currently : false,
        description: isEditable ? editValue.description : '',
        endDate: isEditable ? editValue.endDate : new Date(),
        name: isEditable ? editValue.name : '',
        address: isEditable ? editValue.address : '',
        industry: isEditable ? editValue.industry : '',
        size: isEditable ? editValue.size : '',
        sector: isEditable ? editValue.sector : '',
        supervisorName: isEditable ? editValue.supervisorName : '',
        supervisorEmployer: isEditable ? editValue.supervisorEmployer : '',
        supervisorLevee: isEditable ? editValue.supervisorLevee : '',
        startSalary: isEditable ? editValue.startSalary : 0,
        endSalary: isEditable ? editValue.endSalary : 0,
        currency: isEditable ? editValue.currency : '',
    }

const dispatch = useDispatch()
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, e:FormikHelpers<IExperince>) => {
            dispatch(allActionExperience.addExperience(values))
            e.resetForm()

            // parentFormik.setFieldValue('workExperince', [{ ...values }])
        },
    })


    useEffect(() => {
        console.log('test')
    }, [dispatch, isEditable, setEditValue, editValue])

            const handleUpdate = (id:string, values:IExperince) => {
                setIsEditable(true)
                setEditValue((prve) => ({ ...values }))

                dispatch(allActionExperience.editExperience(id, values))
                console.log('edit  value ______2', editValue)
                setIsEditable(false)
            }

    return (
        <div className="container mx-auto bg-white dark:bg-gray-800 rounded flex space-x-3">
            <div className="w-2/5 container mx-auto p-8">
                <h1 className="text-2xl text-gray-700 font-extrabold leading-1 capitalize ">
                    02.<span className="text-black text-xl px-2 leading-1 ">work Experience</span>
                </h1>
            </div>
            <div className="w-3/5 px-8 container mx-auto">
                {experiences.length ? experiences.map(x => <div><ListItem handleUpdate={() => handleUpdate(x.id, { ...x })} {...x}/></div>) : null}


                    <form onSubmit={(e) => {
                        e.preventDefault()
                        formik.handleSubmit()
                        formik.resetForm()
                    }}>

                        <SelectReact

                            value={formik.values.title}
                            name={'title'}
                            placeholder="Job title"
                            onFocus={formik.handleBlur('title')}
                            touched={formik.touched.title}
                            options={jobTitle}
                            onChange={(value: TOption) => formik.setFieldValue('title', (value.value))}
                            errors={(formik.errors?.title) as string}
                            defaultValue={undefined}
                        />
                        <SelectReact
                            placeholder="Job fields"
                            onFocus={formik.handleBlur('field')}
                            value={formik.values.field}
                            name={'field'}
                            options={jobField}
                            touched={formik.touched.field}
                            onChange={(value: TOption) => formik.setFieldValue('field', (value.value))}
                            errors={(formik.errors?.field) as string}
                            defaultValue={undefined}
                        />
                        <SelectReact
                            placeholder="Job Location"
                            onFocus={formik.handleBlur('location')}
                            value={formik.values.location}
                            name={'location'}
                            options={jobField}
                            touched={formik.touched.location}
                            onChange={(value: TOption) => formik.setFieldValue('location', (value.value))}
                            errors={(formik.errors?.location) as string}
                            defaultValue={undefined}
                        />
                        <div className="flex justify-between items-center space-x-5">
                            <div className="w-1/2">
                                <InputDateController
                                    name={'startDate'}
                                    placeholder={'start Date'}
                                    type="date"
                                    value={formik.values.startDate}
                                    errors={formik.errors?.startDate}
                                    touched={formik.touched?.startDate}
                                    onBlur={formik.handleBlur('startDate')}
                                    onChange={formik.handleChange}
                                    icon={<MdDateRange />}
                                />
                            </div>
                            {!(formik.values.currently) && (
                                <div className="w-1/2">
                                    <InputDateController
                                        name={'endDate'}
                                        placeholder={'end Date'}
                                        type="date"
                                        value={formik.values.endDate}

                                        errors={formik.errors?.endDate}
                                        touched={formik.touched?.endDate}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        icon={<MdDateRange />}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="">
                            <CheckBox
                                label={'Currently  work  there'}
                                name={'currently'}
                                value={formik.values?.currently}
                                errors={formik.errors?.currently}
                                onChange={(e) => formik.setFieldValue('currently', e.target.checked)}
                            />
                        </div>

                        <div className=" flex w-full px-2 ">
                            <TextAreai
                                name={'description'}
                                placeholder={'description Job'}
                                label={'Company Name'}
                                value={formik.values?.description}
                                errors={formik.errors?.description}
                                touched={formik.touched?.description}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}

                            />
                        </div>
                        <div className="mt-2">
                            <h3 className="text-black text-xl my-2 font-extrabold"> company Details </h3>
                            <InputController
                                name={'name'}
                                placeholder={'Company Name'}
                                errors={formik.errors?.name}
                                touched={formik.touched?.name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                icon={<BiCompass />}
                                value={formik.values.name}

                            />
                        </div>

                        <InputController
                            name={'address'}
                            value={formik.values.address}
                            placeholder={'Company address'}
                            errors={formik.errors?.address}
                            touched={formik.touched?.address}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            icon={<BiLocationPlus />}
                        />

                        <SelectReact

                            value={formik.values.industry}
                            name={'industry'}
                            placeholder="Inderstry  size"
                            onFocus={formik.handleBlur('industry')}
                            touched={formik.touched.industry}
                            options={jobTitle}
                            onChange={(value: TOption) => formik.setFieldValue('industry', (value.value))}
                            errors={(formik.errors?.industry) as string}
                            defaultValue={undefined}
                        />
                        <SelectReact

                            value={formik.values.size}
                            name={'size'}
                            placeholder="Inderstry  size"
                            onFocus={formik.handleBlur('size')}
                            touched={formik.touched.size}
                            options={jobTitle}
                            onChange={(value: TOption) => formik.setFieldValue('size', (value.value))}
                            errors={(formik.errors?.size) as string}
                            defaultValue={undefined}
                        /> <SelectReact

                            value={formik.values.sector}
                            name={'sector'}
                            placeholder="Job title"
                            onFocus={formik.handleBlur('sector')}
                            touched={formik.touched.sector}
                            options={jobTitle}
                            onChange={(value: TOption) => formik.setFieldValue('sector', (value.value))}
                            errors={(formik.errors?.sector) as string}
                            defaultValue={undefined}
                        />
                        <InputController
                        value={formik.values.supervisorName}
                            name={'supervisorName'}
                            placeholder={'supervisor Name'}
                            errors={formik.errors?.supervisorName}
                            touched={formik.touched?.supervisorName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur('supervisorName')}
                            icon={<BiLocationPlus />}
                        />
                        <InputController
                            value={formik.values.supervisorEmployer}
                            name={'supervisorEmployer'}
                            placeholder={'supervisor Employer'}
                            errors={formik.errors?.supervisorEmployer}
                            touched={formik.touched?.supervisorEmployer}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur('supervisorEmployer')}
                            icon={<BiLocationPlus />}
                        />
                        <InputController
                            value={formik.values.supervisorLevee}
                            name={'supervisorLevee'}
                            placeholder={'supervisor Levee'}
                            errors={formik.errors?.supervisorLevee}
                            touched={formik.touched?.supervisorLevee}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur('supervisorLevee')}
                            icon={<BiLocationPlus />}
                        />

                        <div className="mt-2">
                            <h3 className="text-black text-xl my-2 font-extrabold"> Compensation </h3>
                            <div className="flex justify-between items-center space-x-8">
                                <div className="w-1/3">
                                    <InputController
                                        name={'startSalary'}
                                        type='number'
                                        value={formik.values.startSalary}
                                        placeholder={'start Salary'}
                                        errors={formik.errors?.startSalary}
                                        touched={formik.touched?.startSalary}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur('startSalary')}
                                        icon={<BiLocationPlus />}
                                    />
                                </div>
                                <div className="w-1/3">
                                    <InputController
                                        name={'endSalary'}
                                        type='number'
                                        value={formik.values.endSalary}
                                        placeholder={'end Salary'}
                                        errors={formik.errors?.endSalary}
                                        touched={formik.touched?.endSalary}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur('endSalary')}
                                        icon={<BiLocationPlus />}
                                    />
                                </div>
                                <div className="w-1/3">
                                    <SelectReact
                                        value={formik.values.currency}
                                        name={'currency'}
                                        placeholder="Job currency"
                                        onFocus={formik.handleBlur('currency')}
                                        touched={formik.touched.currency}
                                        options={jobTitle}
                                        onChange={(value: TOption) => formik.setFieldValue('currency', (value.value))}
                                        errors={(formik.errors?.currency) as string}
                                        defaultValue={undefined}
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className=' px-2 text-lg text-[#ffbe0b]' > + save &amp; &amp; Add  another record   submit</button>
                    </form>
                    {/* <div className=' mt-8 flex justify-center items-end uppercase px-8'>
                        <div className='space-x-3'>
                        <button type="submit" className='rounded border-2 border-blue-800  text-lg text-black max-w-[120px] flex items-center justify-center' > Black</button>
                        </div>
                        <div className='space-x-3'>
                        <button type="submit" className=' px-2 text-lg rounded border-2 text-white bg-green-500 max-w-[120px]' > Next</button>
                        </div>

                    </div> */}
                {/* </form> */}

            </div>
        </div>
    )
}
