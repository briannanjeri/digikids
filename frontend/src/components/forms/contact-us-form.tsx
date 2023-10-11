import emailjs from 'emailjs-com'
import { FormEvent, useEffect, useState } from 'react'

const Result = () => (
  <p className="success-message" style={{ color: '#1ab69d', marginTop: '20px', marginBottom: '0' }}>
    Thanks for your query. We will reach out with a response soon.
  </p>
)

const ContactUsForm = () => {
  const [result, setResult] = useState(false)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    emailjs.sendForm('digikids', 'template_digikids', form, 'GKa_uKiYG6sBrlMaK').then(() => {
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
    <form className="rnt-contact-form rwt-dynamic-form" action="" onSubmit={sendEmail}>
      <div className="row row--10">
        <div className="form-group col-12">
          <input type="text" name="fullname" placeholder="Your name *" required />
        </div>
        <div className="form-group col-12">
          <input type="email" name="email" placeholder="Your email *" required />
        </div>
        <div className="form-group col-12">
          <input type="tel" name="phone" placeholder="Phone number" />
        </div>
        <div className="form-group col-12">
          <textarea name="message" cols={30} rows={4} placeholder="Message *" />
        </div>
        <div className="form-group col-12">
          <button className="rn-btn digi-btn btn-medium submit-btn" name="submit" type="submit">
            Submit Message <i className="icon-4" />
          </button>
        </div>
        {result ? (
          <div className="form-group">
            <Result />
          </div>
        ) : null}
      </div>
    </form>
  )
}

export default ContactUsForm
