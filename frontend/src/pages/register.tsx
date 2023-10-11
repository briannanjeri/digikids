import { Register, SEO } from '@/components'
import { Wrapper } from '@/elements'

const RegisterPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={'Register'}
        metaDesc="Register your child for our online coding courses and help them develop valuable skills for the future. Easy registration process. Sign up today!"
      />
      <Register />
    </Wrapper>
  )
}

export default RegisterPage
