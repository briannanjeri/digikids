import { motion } from 'framer-motion'
import Link from 'next/link'

import { SEO } from '@/components'
import { useMouseMoveUI } from '@/contexts'
import { Footer, Header, Image, Wrapper } from '@/elements'

const ErrorPage = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI()

  return (
    <Wrapper>
      <SEO pageTitle={'Not found'} />
      <Header no_topBar={true} />

      <section className="section-gap-equal error-page-area">
        <div className="container">
          <div className="digi-error">
            <div className="thumbnail">
              <Image w={598} h={286} src="/assets/images/others/404.png" alt="404 Error" />
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <Image w={186} src="/assets/images/about/shape-25.png" alt="Shape" />
                </motion.li>
                <motion.li
                  className="shape-2 scene"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <Image w={101} h={39} src="/assets/images/about/shape-15.png" alt="Shape" />
                </motion.li>
                <motion.li
                  className="shape-3 scene"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <Image w={186} src="/assets/images/about/shape-13.png" alt="Shape" />
                </motion.li>
                <motion.li
                  className="shape-4 scene"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <Image w={156} h={179} src="/assets/images/counterup/shape-02.png" alt="Shape" />
                </motion.li>
              </ul>
            </div>
            <div className="content">
              <h2 className="title">404 - Page Not Found</h2>
              <h4 className="subtitle">The page you are looking for could not be found.</h4>
              <Link href="/" className="digi-btn">
                <i className="icon-west" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
        <ul className="shape-group">
          <li className="shape-1">
            <Image w={660} h={220} src="/assets/images/others/map-shape-2.png" alt="Shape" />
          </li>
        </ul>
      </section>
      <Footer style_2={'footer-dark bg-image footer-style-2'} />
    </Wrapper>
  )
}

export default ErrorPage
