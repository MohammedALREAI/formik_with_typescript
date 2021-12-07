import * as Yup from 'yup'
import { company, jobField, jobFieldValidation, jobLocation, jobTitle, jobTitleValidation } from './listCont'

const validjobTitleValues = jobTitle.map(({ value }) => value)
const validjobFieldValues = jobField.map(({ value }) => value)
const validjobLocationValues = jobField.map(({ value }) => value)

export interface IExperince{
  title:string
  field:string
  location:string
  currently:boolean
  description:string
  startDate:Date,
  endDate?: Date | any
  name:string
  address:string
  industry:string
  size:string
  sector:string
  supervisorName:string
  supervisorEmployer:string
  supervisorLevee:string
  startSalary:number
  endSalary:string
  currency:string
}




export const validationSchema = Yup.object().shape({
        title: Yup.string().required('should  be  select  on title'),
        field: Yup.string().required('should  be  select  on field'),
        location: Yup.string().required('should  be  select  on Loacation'),

        currently: Yup.bool().optional(),
        description: Yup.string().min(42).required('description is required'),
        startDate: Yup.date().default(() => new Date()).required('sould  be  start  date'),

        endDate: Yup.date().when('currently', {
            is: false,
            then: Yup.date().min(Yup.ref('startDate'),
              "End date can't be before Start date",
            ).required('Must enter enter  end  day'),
            otherwise: Yup.date().optional(),
        }),
        name: Yup.string().min(4).required('company name is required'),
        address: Yup.string().min(4).required('company address is required'),
        industry: Yup.string().required('should  be  select  on title'),
        size: Yup.string().required('should  be  select  on title'),
        sector: Yup.string().required('should  be  select  on title'),
        supervisorName: Yup.string().min(4).required('company name is required'),

        supervisorEmployer: Yup.string().min(4).required('company name is required'),

        supervisorLevee: Yup.string().min(4).required('company name is required'),
        startSalary: Yup.number().min(100, 'start Salary more  than  100').required('start Salary is required'),
        endSalary: Yup.number().min(700, 'end Salary more  than  700').required('end Salary is required'),
        currency: Yup.string().required('should  be  select  on title'),
})


export type TValidationSchema = Yup.SchemaOf< typeof validationSchema>

export const validationSchemaParent = Yup.object().shape({
  workExperince: Yup.array(),
})
