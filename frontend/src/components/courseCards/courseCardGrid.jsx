import cn from 'classnames'
import Link from 'next/link'

import { Image } from '@/elements'

export const CourseCardGrid = ({ data, classes }) => {
  return (
    <div className={`digi-course course-style-3 ${classes ? classes : ''}`}>
      <div className="inner">
        <div className="thumbnail">
          <Link href={`/courses/${data.id}`}>
            <Image h={250} w={370} src={`/assets/images/course/${data.img}`} alt="Course Meta" />
          </Link>
          <div className="time-top">
            <span className="duration">
              <i className="icon-61" />
              {data.course_outline}
            </span>
          </div>
        </div>

        <div className="content">
          <span className={cn('course-level', data.level.toLowerCase())}>{data.level}</span>
          <span className="course-age">{data.ageGroup}</span>
          <h5 className="title">
            <Link href={`/courses/${data.id}`}>{data.title}</Link>
          </h5>
          <Link href={`/courses/${data.id}`}>
            <p>{data.short_desc}</p>
          </Link>

          <div className={cn('read-more-btn', { unavailable: !data.isAvailable })}>
            {data.isAvailable ? (
              <Link href="/register" className="digi-btn btn-small btn-secondary" style={{ cursor: 'pointer' }}>
                Register
                <i className="icon-4" />
              </Link>
            ) : (
              <p>Sorry this course is currently unavailable. Please check back later.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
