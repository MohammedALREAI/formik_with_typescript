import { IExperienceShape } from './action'
import { EFormikName, IExperienceShapeSingle, IFormikState, TFormikActions } from './type'





export const formikReducer = (initialState:IFormikState = {
experiences: [],
error: '',
}, action: TFormikActions): IFormikState => {
    switch (action.type) {
        case EFormikName.ADD_EXPERIENCE:
            return {
                ...initialState,
                error: '',
                experiences: [...initialState.experiences, action.payload.experience],
            }
        case EFormikName.DELETE_EXPERIENCE:
            return {
                ...initialState,
                error: '',
                experiences: action.payload.experiences,
            }
        case EFormikName.EDIT_EXPERIENCE:
            return {
                ...initialState,
                error: '',
                experiences: action.payload.experiences,
            }
        case EFormikName.GET_EXPERINCE:
            return {
                ...initialState,
                error: '',
                experiences: [...initialState.experiences],
            }


         default:
              return initialState
    }
}
