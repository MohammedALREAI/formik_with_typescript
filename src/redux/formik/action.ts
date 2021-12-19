import { Dispatch } from 'redux'
import { IExperince } from '../../utils/validation'
import { AppState } from '../store'
import { EFormikName, TFormikActions } from './type'
import { v4 as uuidv4 } from 'uuid'

export interface IExperienceShape extends IExperince {
    id:string
}


 const addExperience = (userData: IExperince) => {
    console.log('enter addExperience 1', userData)
    return (dispatch: Dispatch<TFormikActions>) => {
        console.log('enter addExperience')
         try {
            const experince:IExperienceShape = {
                id: uuidv4() as string,
                ...userData,
            }

            dispatch({
                   type: EFormikName.ADD_EXPERIENCE,
                   payload: {
                    experience: experince,
                   },

              })
         } catch (e: any) {
             throw new Error('there  are  som  thing  error  in add  experince')
         }
    }
}
 const editExperience = (id: string, userData: IExperince) => {
    return (dispatch: Dispatch<TFormikActions>, getState: () => AppState) => {
         try {
            const experince:IExperienceShape = {
                id,
                ...userData,
            }

            console.log('getState().formik.experiences', getState().formik.experiences)
            console.log('getState id', id)

            const result = getState().formik.experiences.filter(x => x.id !== id)
                     console.log('test  edit  section  actions  ', result)

                    //  if (!result.length) {
                    //      dispatch({
                    //         type: EFormikName.EDIT_EXPERIENCE,
                    //         payload: {
                    //             experiences: [],
                    //             error: 'there  is  somthing  woring  please  try agin',
                    //         },

                    //    })
                    //  } else {
             dispatch({
                   type: EFormikName.EDIT_EXPERIENCE,
                   payload: {
                    experiences: result.concat(experince),
                    error: '',
                   },

              })
            // }
         } catch (e: any) {
             throw new Error('there  are  som  thing  error  in add  experince')
         }
    }
}
 const delateExperience = (id: string) => {
    return (dispatch: Dispatch<TFormikActions>, getState: () => AppState) => {
         try {
            const result = getState().formik.experiences.filter(x => x.id !== id)
                     console.log('test  result  ', result)

                     if (!result.length) {
                         dispatch({
                            type: EFormikName.DELETE_EXPERIENCE,
                            payload: {
                             experiences: [],
                                error: 'there is  no item  like  that 😢',
                            },

                       })
                     } else {
             dispatch({
                   type: EFormikName.DELETE_EXPERIENCE,
                   payload: {
                    experiences: result,
                    error: '',
                   },

              })
            }
         } catch (e: any) {
             throw new Error('there  are  som  thing  error  in add  experince')
         }
    }
}



export const allActionExperience = {
    addExperience,
    delateExperience,
    editExperience,
}
