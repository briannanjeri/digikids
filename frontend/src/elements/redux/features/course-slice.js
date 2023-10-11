import { createSlice } from '@reduxjs/toolkit'
import { courseData } from '../../../data'

const initialState = {
  courses: courseData,
  course: {},
}

console.log('initialstate',initialState.courses)

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    single_product: (state, { payload }) => {},
  },
})

export const { single_product } = courseSlice.actions
export const selectCourses = state => state.courses.courses
export default courseSlice.reducer
