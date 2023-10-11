import { useAtom } from 'jotai'

import { SEO } from '@/components'
import CourseGrid from '@/components/courses'
import CourseList from '@/components/courses-list'
import { Wrapper } from '@/elements'
import { coursesAtom } from '@/state'

const CoursesPage = () => {
  const [courses] = useAtom(coursesAtom.coursesDisplayFormat)

  return (
    <Wrapper>
      <SEO pageTitle={'Courses'} />
      {courses === 'list' ? <CourseList /> : <CourseGrid />}
    </Wrapper>
  )
}

export default CoursesPage
