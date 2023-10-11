import { SEO } from '@/components'
import ContactUsMain from '@/components/contact-us'
import { Wrapper } from '@/elements'

const ContactUs = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={'Contact Us'}
        metaDesc="Get in touch with Digikids today! Our friendly team is here to answer any questions you may have about our courses, registration, or anything else related to coding education for kids."
      />
      <ContactUsMain />
    </Wrapper>
  )
}

export default ContactUs
