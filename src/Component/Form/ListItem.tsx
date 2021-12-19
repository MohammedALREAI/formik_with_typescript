import React, { useEffect } from 'react'
import { MdDelete, MdEditNote } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { allActionExperience } from '../../redux/formik/action'
import { handleDate, IHandleDate } from '../../utils/handleDate'
import { IExperince } from '../../utils/validation'

interface Props extends IExperince {
        id:string,
        handleUpdate:()=>void
}

export const ListItem = (props:Props) => {
    const { id, title, name, endDate, startDate } = props
    const date1 = startDate && handleDate(new Date(startDate))
    const date2 = endDate ? handleDate(new Date(endDate)) : 'present'
     const endDateString = typeof date2 === 'object' ? `${date2.month}/ ${date2.year}` : 'present'
     const dispatch = useDispatch()

     useEffect(() => {
         console.log('test dealte  item ')
     }, [dispatch, id])
     const handleDelate = (id:string) => {
         console.log('test id  ')
         dispatch(allActionExperience.delateExperience(id))
     }
    return (
        <div className='container mt-2  mx-auto bg-red-200 flex justify-between items-center px-2 min-h-[50px] rounded-md opacity-50' >
            <div>
            <h3 className=' text-[16px] font-extrabold'> {title} @ {name} </h3>
            </div>
            <div className='text-[16px]'> {date1.month}/ {date1.year} - {endDateString}  </div>
            <div className='flex space-x-2'>
                <span className='w-4 h-4'>
                    <MdDelete className='text-red-600 transform  hover:rotate-45 delay-150 duration-300 ease-in-out' onClick={() => handleDelate(id)}/>
                </span>
                <span>
                    <MdEditNote className='text-green-600 transform  hover:rotate-45 delay-150 duration-300 ease-in-out' onClick={props.handleUpdate}/>
                </span>
            </div>
        </div>
    )
}
