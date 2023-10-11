import { SEO } from '@/components'
import PrivacyPolicyMain from '@/components/privacy-policy'
import { Wrapper } from '@/elements'

export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <SEO pageTitle={'Privacy Policy'} />
      <PrivacyPolicyMain />
    </Wrapper>
  )
}
