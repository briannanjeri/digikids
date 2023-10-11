import { Image } from '@/elements'
import emailjs from 'emailjs-com'
import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'

const { logoDark, logoLight, desc, call, email, widgets } = {
  logoLight: '/assets/images/logo/logo-dark.png',
  logoDark: '/assets/images/logo/logo-white.png',
  desc: 'Digikids offers a rigorous STEM program with a history of excellence in edtech.',
  call: '+254743665574',
  email: 'info@digikids.co.ke',
  widgets: [
    {
      col: '3',
      class: 'explore-widget',
      widget_title: 'Digikids',
      footer_links: [
        { link: 'about', title: 'About' },
        { link: 'courses', title: 'Courses' },
        { link: 'pricing', title: 'Pricing' },
        { link: 'terms-condition', title: 'Terms & Conditions' },
        { link: 'privacy-policy', title: 'Privacy Policy' },
      ],
    },
    {
      col: '2',
      class: 'quick-link-widget',
      widget_title: 'Links',
      footer_links: [
        { link: 'contact-us', title: 'Contact Us' },
        { link: 'faq', title: "FAQ's" },
        { link: 'register', title: 'Register' },
      ],
    },
  ],
}

const Result = () => (
  <p className="success-message" style={{ color: '#1ab69d', marginTop: '20px', marginBottom: '0' }}>
    Thanks for your email we&lsquo;ll stay in touch.
  </p>
)

const Footer = ({ style_2, dark_bg, home_4 }: any) => {
  const [result, setResult] = useState(false)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    emailjs.sendForm('digikids', 'digikids_emails_form', form, 'GKa_uKiYG6sBrlMaK').then(() => {
      form.reset()
      setResult(true)
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [result])

  return (
    <footer
      className={`digi-footer ${
        style_2 ? style_2 : dark_bg ? 'footer-dark bg-image footer-style-3' : 'footer-lighten bg-image footer-style-1'
      }`}
    >
      <div className={`footer-top ${style_2 ? 'footer-top-2' : ''}`}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="digi-footer-widget">
                <div className="logo">
                  <Link href={'/'}>
                    {!dark_bg && (
                      <>
                        {!style_2 && (
                          <Image w={150} h={120} className="logo-light" src={logoLight} alt="Digikids Logo" />
                        )}
                        <Image w={150} h={120} className="logo-dark" src={logoDark} alt="Digikids Logo" />
                      </>
                    )}
                  </Link>

                  <Link href={'/'}>
                    {dark_bg && (
                      <Image
                        w={150}
                        h={120}
                        className="logo-light"
                        src={'/assets/images/logo/logo-white.png'}
                        alt="Digikids Logo"
                      />
                    )}
                  </Link>
                </div>

                <p className="description">{desc}</p>
                <div className="widget-information">
                  <ul className="information-list">
                    <li>
                      <span>Call:</span>
                      <a href="tel:+254743665574">{call}</a>
                    </li>
                    <li>
                      <span>Email:</span>
                      <a href="mailto:info@digikids.co.ke" rel="noreferrer" target="_blank">
                        {email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {widgets.map((w, i) => (
              <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                <div className={`digi-footer-widget ${w.class}`}>
                  <h4 className="widget-title">{w.widget_title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {w.footer_links.map((l, i) => (
                        <li key={i}>
                          <Link href={`/${l.link}`}>{l.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-4 col-md-6">
              <div className="digi-footer-widget">
                <h4 className="widget-title">Contacts</h4>
                <div className="inner">
                  <p className="description">Enter your email to stay up-to date with our course offerings</p>
                  <form className="input-group footer-subscription-form" action="" onSubmit={sendEmail}>
                    <input type="email" className="form-control" placeholder="Your email" required name="email" />
                    <button
                      className={`digi-btn ${dark_bg && !home_4 ? 'btn-secondary' : ''} btn-medium`}
                      name="submit"
                      type="submit"
                    >
                      Subscribe <i className="icon-4" />
                    </button>
                  </form>
                  {result ? (
                    <div className="form-group">
                      <Result />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <p>
                  Copyright {new Date().getFullYear()}{' '}
                  <a href="/" rel="noreferrer" target="_blank">
                    Digikids.
                  </a>{' '}
                  All Rights Reserved.
                  <br />
                  Engineered By{' '}
                  <a href="https://castynet.africa" rel="noreferrer" target="_blank">
                    Castynet Studios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
