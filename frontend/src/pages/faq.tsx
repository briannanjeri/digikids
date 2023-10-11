import { SEO } from '@/components'
import FaqMain from '@/components/faq'
import { Wrapper } from '@/elements'

export default function Faq() {
  return (
    <Wrapper>
      <SEO pageTitle={'Faq'} />
      <FaqMain />
    </Wrapper>
  )
}
