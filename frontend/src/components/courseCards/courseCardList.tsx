import { Image } from '@/elements'
import Link from 'next/link'

export const CourseCardList = ({ data, classes }: any) => {
  return (
    <div className={`digi-course course-style-4 course-style-8 ${classes ? classes : ''}`}>
      <div className="inner">
        <div className="thumbnail">
          <Link href={`/courses/${data.id}`}>
            <Image src={`/assets/images/course/${data.img}`} alt="Course Thumb" h={200} />
          </Link>
          <div className="time-top">
            <span className="duration">
              <i className="icon-61" />
              {data.course_outline}
            </span>
          </div>
        </div>

        <div className="content">
          <div className="course-price">KES {data?.course_price}</div>

          <h6 className="title">
            <Link href={`/courses/${data.id}`}>{data.title}</Link>
          </h6>

          <p>{data.short_desc}</p>

          <ul className="course-meta">
            <li>
              <i className="icon-24" />
              {data.lesson} Lessons
            </li>
          </ul>
        </div>
      </div>
      <div className="hover-content-aside">
        <div className="content">
          <span className="course-level">{data.level}</span>

          <h5 className="title">
            <Link href={`/courses/${data.id}`}>{data.title}</Link>
          </h5>

          <ul className="course-meta">
            <li>{data.ageGroup}</li>
            <li>{data.level}</li>
          </ul>

          <div className="course-feature">
            <h6 className="title">What You’ll Learn?</h6>
            <ul>
              {data.learn_list.slice(0, 3).map((feature: any, key: any) => (
                <li key={key}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="button-group">
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
