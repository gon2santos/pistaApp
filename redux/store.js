import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import { pistaApi } from './apiSlices/apiSlices'

export const store = configureStore({
    reducer: {
        [pistaApi.reducerPath]: pistaApi.reducer,
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pistaApi.middleware),
})