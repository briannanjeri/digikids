import { SEO } from '@/components'
import PricingTableMain from '@/components/pricing-table'
import { Wrapper } from '@/elements'

export default function PricingTable() {
  return (
    <Wrapper>
      <SEO pageTitle={'Pricing Table'} />
      <PricingTableMain />
    </Wrapper>
  )
}
