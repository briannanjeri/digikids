import { combineReducers, configureStore } from '@reduxjs/toolkit'
import courseSlice from './features/course-slice'
import filterSlice from './features/filter-slice'

const rootReducer = combineReducers({
  courses: courseSlice,
  filter: filterSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
