import { SEO } from '@/components'
import HomeOnlineAcademy from '@/components/home'
import { Wrapper } from '@/elements'

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home'} />
      <HomeOnlineAcademy />
    </Wrapper>
  )
}

export default Home
