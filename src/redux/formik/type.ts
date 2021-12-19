import { Action } from 'redux'
import { IExperince as IExperience, IExperince } from '../../utils/validation'

export enum EFormikName {
ADD_EXPERIENCE = 'ADD_EXPERINCE',
DELETE_EXPERIENCE = 'DELETE_EXPERINCE',
EDIT_EXPERIENCE = 'EDIT_EXPERINCE',
GET_ID_EXPERINCE = 'GET_ID_EXPERINCE',
GET_EXPERINCE = 'GET_EXPERINCE',

}

export interface IExperienceShape extends IExperince {
    id:string
}



interface IADD_EXPERIENCE extends Action<EFormikName>{
    type:EFormikName.ADD_EXPERIENCE,
    payload:{
    experience:IExperienceShape
    }
}

interface IDELETE_EXPERIENCE extends Action<EFormikName>{
    type:EFormikName.DELETE_EXPERIENCE,
    payload:{
        experiences:IExperienceShape[],
        error?:string
        }
}
interface IEDIT_EXPERIENCE extends Action<EFormikName>{
    type:EFormikName.EDIT_EXPERIENCE,
    payload:{
        experiences:IExperienceShape[],
        error?:string }

}
interface IGET_ID_EXPERINCE extends Action<EFormikName>{
    type:EFormikName.GET_ID_EXPERINCE,
    payload:{
        experience:IExperienceShape
        }
}
interface IGET_EXPERINCE extends Action<EFormikName>{
    type:EFormikName.GET_EXPERINCE,
    payload:{
        experience:IExperienceShape
        }
}


export type TFormikActions = IADD_EXPERIENCE | IDELETE_EXPERIENCE | IEDIT_EXPERIENCE | IGET_ID_EXPERINCE | IGET_EXPERINCE



export interface IExperienceShapeSingle{
    isLoading: false,
    error: '',
    experience:IExperienceShape

}

export interface IFormikState {
    experiences:IExperienceShape[]
    // isLoading: false,
    error: '',
    // experience:IExperienceShapeSingle
}
