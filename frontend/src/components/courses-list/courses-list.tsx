import { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { courseData } from '../../data'
import CourseSidebar from '../common/sidebar/course-sidebar'
import SortingArea from '../course-filter/sorting-area'
import CourseItems from './course-items'
import { courseContext } from '@/contexts'

const CoursesList = () => {
  const [courses, setCourses] = useContext(courseContext)
  const [showing, setShowing] = useState(0)
  const { categories, levels, languages, price } = useSelector((state: any) => state.filter)

  let items = courseData
    ?.filter(item1 => (categories?.length !== 0 ? categories?.some((item2: any) => item1.ageGroup == item2) : item1))
    .filter(item1 => (levels?.length !== 0 ? levels?.some((item2: any) => item1.level == item2) : item1))
    .filter(item1 => (languages?.length !== 0 ? languages?.some((item2: any) => item1.language == item2) : item1))
    .filter(item => Number(item.course_price) <= price)

  console.log('items', items)

  useEffect(() => {
    setCourses(items)
    console.log('items', items)
  }, [items])

  return (
    <div className="digi-course-area course-area-1 section-gap-equal">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3">
            {/* course sidebar start */}
            <CourseSidebar course_items={courseData} />
            {/* course sidebar end */}
          </div>

          <div className="col-lg-9 col-pl--35">
            {/* sorting area start */}
            <SortingArea num={showing} items={items} courses={courses} setCourses={setCourses} />
            {/* sorting area end */}

            <CourseItems itemsPerPage={6} items={items} course_style="8" setShowing={setShowing} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesList
