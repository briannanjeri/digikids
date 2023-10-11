import { SEO } from '@/components'
import AboutMain from '@/components/about'
import { Wrapper } from '@/elements'

const About = () => (
  <Wrapper>
    <SEO pageTitle={'About Us'} />
    <AboutMain />
  </Wrapper>
)

export default About
