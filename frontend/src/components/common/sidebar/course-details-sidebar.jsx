import React from 'react'
import { Books } from '../../../elements/svg'
import Link from 'next/link'

const CourseDetailsSidebar = ({ course, details_2 = false }) => {
  const { certificate, course_price, duration, language } = course || {}

  return (
    <>
      <div className={`course-sidebar-3 ${details_2 ? '' : 'sidebar-top-position'}`}>
        <div className="digi-course-widget widget-course-summery">
          <div className="inner">
            <div className="content">
              <h4 className="widget-title">Course Includes:</h4>
              <ul className="course-item">
                <li>
                  <span className="label">
                    <i className="icon-60" />
                    Price:
                  </span>
                  <span className="value price">KES {course_price}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-61" />
                    Duration:
                  </span>
                  <span className="value">{duration}</span>
                </li>

                <li>
                  <span className="label">
                    <Books />
                    Lessons:
                  </span>
                  <span className="value">8</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-59" />
                    Language:
                  </span>
                  <span className="value">{language}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-64" />
                    Certificate:
                  </span>
                  <span className="value">{certificate}</span>
                </li>
              </ul>

              <div className="read-more-btn">
                <Link href="/register" className="digi-btn">
                  Register Now <i className="icon-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetailsSidebar
