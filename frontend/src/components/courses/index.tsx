import { Footer, Header } from '@/elements'
import Courses from './courses'

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_topBar={true} />
        <Courses />
        <Footer style_2={'footer-dark bg-image footer-style-2'} />
      </div>
    </div>
  )
}

export default index
