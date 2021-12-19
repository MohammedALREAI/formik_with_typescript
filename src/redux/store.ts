import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { formikReducer } from './formik/reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    formik: formikReducer,
})

const middleware = [thunk]

const Store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)),
    )
export type AppDispatch = typeof Store.dispatch
export type AppState = ReturnType<typeof reducers>

// export const useDispatch: () => AppDispatch = OriginalUseDispatch
declare const Window: any

Window.store = Store
export default Store
