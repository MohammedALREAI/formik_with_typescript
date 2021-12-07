


export type TOptions = Array<{
    label:string,
    value:string}>
export type TOption = {
    label:string,
    value:string}

export const jobTitle:TOptions = [
    {
        label: 'frontend',
        value: 'frontend',
    },
    {
        label: 'fullstack',
        value: 'fullstack',
    },
]

export const jobField:TOptions = [
    {
        label: 'react',
        value: 'react',
    },
    {
        label: 'node',
        value: 'node',
    },
    {
        label: 'next',
        value: 'next',
    },
]

export const jobTitleValidation = jobTitle.map((x) => x.value)
export const jobFieldValidation = jobTitle.map((x) => x.value)

export const jobLocation = ['gaza', 'reafah  ', 'nablas']

export const company:{
industry:TOptions,
size:TOptions,
sector:TOptions

} = {
    industry: [
        {
        label: 'ed1',
        value: 'ed1',
       },
        {
        label: 'ed3',
        value: 'ed2',
       },
        {
        label: 'ed3',
        value: 'ed3',
       },

],
    size: [
            {
            label: 'smal',
            value: '1-10 ',
           },
            {
            label: 'mideiam',
            value: '20-50',
           },
            {
            label: 'large',
            value: '50-100',
           },
        ],
    sector: [
        {
            label: 'secter1',
            value: 'secter1',
           },
            {
            label: 'secter2',
            value: 'secter2',
           },
            {
            label: 'secter3',
            value: 'ed4',
           },
    ],
}
