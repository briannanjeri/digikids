import { createContext, useState } from 'react'
import { courseData } from '@/data'
import { ICourse } from '@digikids/types'

interface Props {
  children: React.ReactNode
}

export const courseContext = createContext<[ICourse[] | null, React.Dispatch<React.SetStateAction<ICourse[] | null>>]>([
  null,
  () => {},
])

export const CourseProvider: React.FC<Props> = props => {
  const [courses, setCourses] = useState<ICourse[] | null>(courseData)
  return (
    <div>
      <courseContext.Provider value={[courses, setCourses]}>{props.children}</courseContext.Provider>
    </div>
  )
}
