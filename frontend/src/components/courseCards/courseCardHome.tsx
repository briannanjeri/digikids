import { Image } from '@/elements'
import Link from 'next/link'

export const CourseCardHome = ({ data, classes }: any) => {
  return (
    <div className={`digi-course course-style-4 ${classes ? classes : ''}`}>
      <div className="inner">
        <div className="thumbnail">
          <Link href={`/courses/${data.id}`}>
            <Image w={200} src={`/assets/images/course/${data.img}`} alt="Course Meta" />
          </Link>
          <div className="time-top">
            <span className="duration">
              <i className="icon-61" />
              {data.course_outline}
            </span>
          </div>
        </div>

        <div className="content">
          <div className="course-price">KES {data.course_price}</div>
          <h6 className="title">
            <Link href={`/courses/${data.id}`}>{data.title}</Link>
          </h6>
          <ul className="course-meta">
            <li>
              <i className="icon-24" />
              {data.lesson} Lessons
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
