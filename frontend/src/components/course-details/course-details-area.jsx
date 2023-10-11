import React from 'react'
import CourseDetailsSidebar from '../common/sidebar/course-details-sidebar'

const CourseDetailsArea = ({ course }) => {
  const { course_desc, course_desc_2, learn_list, whyThisCourse, curriculum_desc, course_lessons, title } = course || {}

  return (
    <section className="digi-section-gap course-details-area">
      <div className="container">
        <h3>{title}</h3>
        <div className="row row--30">
          <div className="col-lg-8">
            <div className="course-details-content">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="overview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#overview"
                    type="button"
                    role="tab"
                    aria-controls="overview"
                    aria-selected="true"
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="curriculum-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#curriculum"
                    type="button"
                    role="tab"
                    aria-controls="curriculum"
                    aria-selected="false"
                  >
                    Curriculum
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                  <div className="course-tab-content">
                    <div className="course-overview">
                      <h3 className="heading-title">Course Description</h3>
                      <p>{course_desc}</p>
                      <p className="mb--60">{course_desc_2}</p>
                      <h5 className="title">What You’ll Learn?</h5>
                      <ul className="mb--60">
                        {learn_list?.map((l, i) => (
                          <li key={i}>{l}</li>
                        ))}
                      </ul>
                      <p>{whyThisCourse}</p>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                  <div className="course-tab-content">
                    <div className="course-curriculam">
                      <h3 className="heading-title">Course Curriculum</h3>
                      <p>{curriculum_desc}</p>
                      {course_lessons.map((lesson, i) => (
                        <div key={i} className="course-lesson">
                          <h5 className="title">{lesson?.title}</h5>
                          <p>{lesson?.text}</p>
                          <ul>
                            {lesson?.lessons?.map((list, i) => (
                              <li key={i}>
                                {list.title && (
                                  <div className="text">
                                    <i className="icon-65" />
                                    {list.title}
                                  </div>
                                )}

                                {!list?.badge_list && (
                                  <div className="icon">
                                    <i className={list?.icon} />
                                  </div>
                                )}

                                {list?.badge_list && (
                                  <div className="badge-list">
                                    <span className="badge badge-primary">{list?.question} Question</span>
                                    <span className="badge badge-secondary">{list?.minutes} Minutes</span>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <CourseDetailsSidebar course={course} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseDetailsArea
