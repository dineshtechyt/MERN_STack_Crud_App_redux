import { configureStore} from '@reduxjs/toolkit'
import { getEmployees } from './slice/getEmployees'

export default configureStore({
    reducer:{
       employees: getEmployees.reducer,

    },
})