import { Footer, Header } from '@/elements'
import CtaArea from '../home/cta-area'
import AboutUsArea from './about-us-area'
import CounterArea from './counter-area'
import TestimonialArea from './testimonial-area'
import WhyChose from './why-chose'

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header style_3={true} no_topBar={true} />
        <AboutUsArea />
        <CounterArea />
        <WhyChose />
        <CtaArea />
        <TestimonialArea />
        <Footer style_2={'footer-dark bg-image footer-style-2'} />
      </div>
    </div>
  )
}

export default index
