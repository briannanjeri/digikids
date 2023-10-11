import { Footer, Header } from '@/elements'
import ConditionArea from './condition-area'

export const TermsAndConditions = () => (
  <div className="sticky-header">
    <div id="main-wrapper" className="main-wrapper">
      <Header no_topBar={true} />
      <ConditionArea />
      <Footer style_2={'footer-dark bg-image footer-style-2'} />
    </div>
  </div>
)
