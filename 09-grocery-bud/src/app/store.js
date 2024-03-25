import {configureStore} from '@reduxjs/toolkit'
import reducers from '../fetaures/todo/todoSlice'

export const store = configureStore({
    reducer:reducers
})