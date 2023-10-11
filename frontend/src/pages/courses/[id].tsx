import { useRouter } from 'next/router'

import { SEO } from '@/components'
import CourseDetailsMain from '@/components/course-details'
import { courseData } from '@/data'
import { Wrapper } from '@/elements'

const DynamicCourseDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const course = courseData.find(({ id: i }) => i === id)

  return (
    <Wrapper>
      <SEO pageTitle={course?.title} metaDesc={course?.meta_desc} />
      <CourseDetailsMain course={course} />
    </Wrapper>
  )
}

export default DynamicCourseDetails

export async function getStaticPaths() {
  const paths = courseData.map(course => {
    return {
      params: {
        id: `${course.id}`,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  return {
    props: {},
  }
}
