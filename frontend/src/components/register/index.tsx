import cn from 'classnames'
import Link from 'next/link'

import { courseData } from '@/data'
import { Footer, Header } from '@/elements'
import { useTime } from '@/elements/utils'

import { Image } from '@/elements'
import s from './styles.module.scss'

const details = {
  date: '2023-05-13T06:00:00.116Z',
  name: 'May - July Weekend Classes',
}

const availableCourses = courseData.filter(({ isAvailable }) => isAvailable)

const RegisterButton = () => {
  const { days, hours, minutes, seconds } = useTime(details.date)

  return (
    <div className={s.register}>
      <Link href="https://forms.gle/NrDwDGgHFZFowLwK6" className={cn(s.registerButton, 'digi-btn btn-secondary')}>
        Click here to Register
      </Link>
      <div className={s.countdown}>
        <div className={s.countdownSection}>
          <div>
            <div className={cn(s.countdownNumber, s.day)}>{days}</div>
            <div className={s.countdownUnit}>Days</div>
          </div>
        </div>
        <div className={s.countdownSection}>
          <div className={cn(s.countdownNumber, s.hour)}>{hours}</div>
          <div className={s.countdownUnit}>Hrs</div>
        </div>
        <div className={s.countdownSection}>
          <div className={cn(s.countdownNumber, s.minute)}>{minutes}</div>
          <div className={s.countdownUnit}>Min</div>
        </div>
        <div className={s.countdownSection}>
          <div className={cn(s.countdownNumber, s.second)} suppressHydrationWarning>
            {seconds}
          </div>
          <div className={s.countdownUnit}>Sec</div>
        </div>
      </div>
    </div>
  )
}

export const Register = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_topBar={true} />
        <section className="digi-section-gap course-details-area mt-5">
          <div className="container">
            <h3>Register for the upcoming {details.name}</h3>

            <div className={s.content}>
              <p>
                As a parent, you want to provide your child with engaging and educational experiences that will help
                them develop important 21st-century skills. Our May-July Bootcamp offers a convenient and effective way
                to do just that.
              </p>
              <p>
                The Bootcamp will be offered online, through instructor-led virtual classes, so your child can
                participate from the comfort of your home. The Bootcamp offers three programming language options, each
                structured in modules that can be tailored to your child&apos;s age, prior coding experience, and
                interests.
              </p>
              <p>
                Each module requires 30 student-teacher contact hours to complete, and can provide your child with a
                strong foundation in a valuable and in-demand skill. Enroll your child in the May-July Bootcamp today
                and give them the opportunity to learn and grow with the support of our experienced instructors.
              </p>
              <h4 className={s.courseOverview}>Bootcamp Overview</h4>
              <ul className={s.courseList}>
                <li>
                  <u>36 spots</u> only!
                </li>
                <li>Online; Saturdays only</li>
                <li>Cost: 7,000 per module</li>
                <li>3 hours, 30 minutes per session</li>
                <li>
                  13<sup>th</sup> May - 22<sup>nd</sup> July 2023 (11 weeks)
                </li>
              </ul>
              <h4 className={s.courseOverview}>Available Courses/Modules</h4>
              <div className={s.courses}>
                {availableCourses.map((course, index) => (
                  <div
                    key={index}
                    className={cn(s.course, 'coursesDark col')}
                    data-sal-delay={`${(index + 1) * 100 + 100}`}
                    data-sal="slide-up"
                    data-sal-duration="800"
                  >
                    <Link href={`courses/${course.id}`}>
                      <h6>{course.title}</h6>
                    </Link>
                    <p className={s.courseDesc}>{course.short_desc}</p>
                    <Image src={`/assets/images/course/${course.img}`} alt={course.title} className={s.courseImage} />
                    <div className={s.buttonsWrapper}>
                      <div className={s.levelAgeWrapper}>
                        <span className={cn(s.courseLevel, s[course.level.toLowerCase()])}>{course.level}</span>
                        <span className={s.courseAge}>{course.ageGroup}</span>
                      </div>
                      <Link href={`courses/${course.id}`}>
                        <button className={s.readMore}>View more</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <RegisterButton />
              <h4>Fees and Payment Information</h4>
              <div>
                <p>
                  Partial payments are accepted, with a minimum amount of KES 3,000 payable on or before the first day
                  of training. Full payment must be cleared by the fourth week of the module.
                </p>
                <p>here is how to pay;</p>
                <p>
                  <strong>Method 1:</strong>
                </p>
                <ul className={s.courseList}>
                  <li>Go to Lipa na M-PESA</li>
                  <li>Select Pay Bill</li>
                  <li>Under ‘Enter business no.’ – type 987210</li>
                  <li>Under ‘Account no.’ – type the Student’s Name (e.g. Wambui Otieno).</li>
                  <li>Enter the amount (KES 5,000)</li>
                  <li>Put your M-PESA PIN and confirm OK</li>
                  <li>
                    You will get M-PESA notification SMS confirming the money was sent to ‘…DIGIKIDS for account
                    (student’s name)…’
                  </li>
                </ul>
                <p>
                  <strong>Method 2:</strong>
                </p>
                <p>You can do a deposit or bank transfer directly to our bank account:</p>
                <ul className={s.courseList}>
                  <li>Bank: NCBA Bank Kenya PLC</li>
                  <li>Account Name: Digikids Afflatus</li>
                  <li>Account number: 1003585178</li>
                  <li>Branch: NCBA House</li>
                </ul>
                <p>Thank You!</p>
              </div>

              <RegisterButton />
            </div>
          </div>
        </section>
        <Footer style_2={'footer-dark bg-image footer-style-2'} />
      </div>
    </div>
  )
}
