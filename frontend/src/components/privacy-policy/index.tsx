import { Footer, Header } from '@/elements'
import PolicyArea from './policy-area'

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_topBar={true} />
        <PolicyArea />
        <Footer style_2={'footer-dark bg-image footer-style-2'} />
      </div>
    </div>
  )
}

export default index
