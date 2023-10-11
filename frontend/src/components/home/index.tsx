import { Footer, Header } from '@/elements'
import AdBanner from './ad-banner'
import BrandArea from './brand-area'
import Categories from './categories'
import CounterArea from './counter-area'
import Courses from './courses'
import CtaArea from './cta-area'
import FaqArea from './faq-area'
import HeroArea from './hero-area'

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header style_3={true} />
        <HeroArea />
        <Categories />
        <Courses />
        <BrandArea />
        <CounterArea />
        <FaqArea />
        <CtaArea />
        <AdBanner home_4={true} />
        <Footer dark_bg={true} home_4={true} />
      </div>
    </div>
  )
}

export default index
