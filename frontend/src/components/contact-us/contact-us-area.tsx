import React from 'react'
import { motion } from 'framer-motion'

import { useMouseMoveUI } from '@/contexts'
import ContactUsForm from '../forms/contact-us-form'
import { Image } from '@/elements'

const ContactUsArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI()

  return (
    <section className="contact-us-area">
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-4 col-lg-6">
            <div className="contact-us-info">
              <h3 className="heading-title">{"We're"} Always Eager to Hear From You!</h3>
              <p>
                If you have any questions, comments, or concerns, please feel free to contact us. We will get back to
                you in a few hours, but in some cases it might take up to 24 hours to get a response.
              </p>
              <p>Incase your query is urgent, please call us.</p>
              <ul className="address-list">
                <li>
                  <h5 className="title">Phone</h5>
                  <p>
                    <a href="tel:+254743665574" aria-label="Call digikids">
                      +254 743 665 574
                    </a>
                  </p>
                </li>
                <li>
                  <h5 className="title">Email</h5>
                  <p>
                    <a href="mailto:digikids@example.com" aria-label="Email Digikids">
                      info@digikids.co.ke
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="offset-xl-2 col-lg-6">
            <div className="contact-form form-style-2">
              <div className="section-title">
                <h4 className="title">Get In Touch</h4>
                <p>We typically respond in a few hours</p>
              </div>
              {/* form start */}
              <ContactUsForm />
              {/* form end */}
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <Image w={186} src="/assets/images/about/shape-13.png" alt="Shape" />
                </motion.li>
                <motion.li
                  className="shape-2 scene"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <Image w={159} h={175} src="/assets/images/counterup/shape-02.png" alt="Shape" />
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsArea
