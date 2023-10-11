import React from 'react'
import SingleFaq from './single-faq'
import { navTabProps } from '../typescriptMigration/type'

function NavTab({ active = false, id, title }: navTabProps) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${active ? 'active' : ''}`}
        data-bs-toggle="tab"
        data-bs-target={`#${id}`}
        type="button"
        role="tab"
        aria-selected={active ? 'true' : 'false'}
      >
        {title}
      </button>
    </li>
  )
}

const FaqArea = () => {
  return (
    <section className="digi-section-gap faq-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="faq-page-nav">
              <h3 className="title">Browse the most frequently asked questions</h3>
              <p>
                In this section, you will find answers to the most commonly asked questions about our programs,
                including pricing, curriculum, schedules, and more. If you don&apos;t find the answer you&apos;re
                looking for, please don&apos;t hesitate to contact us and we&apos;ll be happy to help
              </p>

              <ul className="nav nav-tabs" role="tablist">
                <NavTab active={true} id="gn-ques" title="General Questions" />
                <NavTab id="com-policy" title="Company Policies" />
                <NavTab id="pay-option" title="Payment Options" />
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content faq-page-tab-content" id="faq-accordion">
              <div className="tab-pane fade show active" id="gn-ques" role="tabpanel">
                <div className="faq-accordion">
                  <div className="accordion">
                    <SingleFaq
                      show={true}
                      id="1"
                      title="What ages do you teach?"
                      desc="We provide tailored coding programs for kids aged 6 to 17 years of age."
                    />

                    <SingleFaq
                      id="2"
                      title="What courses do you offer?"
                      desc="We offer courses in Creative Computing with Scratch, Game Development with Python, and Web Development with HTML/CSS."
                    />

                    <SingleFaq
                      id="3"
                      title="What equipment is needed for the classes?"
                      desc="Our classes are online, so students will need a decent laptop and a stable internet connection to participate."
                    />

                    <SingleFaq
                      show={true}
                      id="4"
                      title="Can my child start a Digikids class at any time during the year?"
                      desc="We have structured enrolment periods for our weekend coding classes and holiday coding bootcamps. However, we do offer online private lessons, which can be booked at any time during the year to ensure that your child continues to learn coding."
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="com-policy" role="tabpanel">
                <div className="faq-accordion">
                  <div className="accordion">
                    <SingleFaq
                      show={true}
                      id="5"
                      title="What happens if I miss a class?"
                      desc="If you miss a class, we offer a makeup session. We provide access to resources and course materials so students can continue learning outside of class."
                    />

                    <SingleFaq
                      id="6"
                      title="What if I want to switch to a different course?"
                      desc="If you wish to switch to a different course, please contact us and we will do our best to accommodate your request. However, please note that switching courses may not always be possible due to availability and scheduling constraints."
                    />

                    <SingleFaq
                      id="7"
                      title="Who is allowed in the classes?"
                      desc="For privacy and security reasons, no one other than the kids and Digikids tutors are allowed in the classes"
                    />

                    <SingleFaq
                      show={true}
                      id="11"
                      title="Do I get a certificate after the course?"
                      desc="Upon successfully completing each course and/or module, you will be awarded a professional certificate of completion as well as an individual performance report. Additionally, in recognition of outstanding performance in a particular discipline, you may receive a certificate of merit."
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pay-option" role="tabpanel">
                <div className="faq-accordion">
                  <div className="accordion">
                    <SingleFaq
                      show={true}
                      id="8"
                      title="What payment methods do you accept?"
                      desc="We accept payments via M-Pesa, bank transfer, and credit/debit card."
                    />

                    <SingleFaq
                      id="9"
                      title="Is there a payment deadline for classes?"
                      desc="Yes, payment for each term of classes is due on or before the first day of the term."
                    />

                    <SingleFaq
                      show={true}
                      id="10"
                      title="Do you offer any discounts on classes?"
                      desc="Yes, we offer discounts for early-bird registration, referrals, and for siblings enrolling in the same class."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqArea
