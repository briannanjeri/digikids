import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useMouseMoveUI } from '@/contexts'
import { Image } from '@/elements'
import useModal from '@/elements/hooks/use-modal'
import VideoModal from '../common/popup-modal/video-modal'

const contents = {
  pre_title: 'Testimonials',
  title: (
    <>
      What Our Students <br /> Have To Say
    </>
  ),
  testimonials: [
    {
      ratings: [1, 2, 3, 4, 5],
      desc: '“Life is fun at digikids. We get challenges that exercise our brains and get us all sharp and computer literate! You should join us too.”.',
      author: '/assets/images/testimonial/ethan.png',
      name: 'Ethan',
      title: 'Student',
    },
    {
      ratings: [1, 2, 3, 4, 5],
      desc: '“Before coming to this workshop, programming seemed very difficult and complicated to me. After this workshop, I think programming is quite simple and easy to learn!”.',
      author: '/assets/images/testimonial/sifa.png',
      name: 'Sifa',
      title: 'Student',
    },
    {
      ratings: [1, 2, 3, 4, 5],
      desc: '“Digikids is simply the best. I have enjoyed working with the trainers here and I already feel like a computer genius”.',
      author: '/assets/images/testimonial/cheryl.png',
      name: 'Cheryl',
      title: 'Student',
    },
  ],
  video_title: 'Explorer bootcamp class video',
  video_id: 'u9QLk_K8Hlw',
}

const { pre_title, testimonials, title, video_id, video_title } = contents

const TestimonialArea = () => {
  const [loop, setLoop] = useState(false)
  useEffect(() => setLoop(true), [])
  const { isVideoOpen, setIsVideoOpen } = useModal()
  const { mouseDirection, mouseReverse } = useMouseMoveUI()
  return (
    <>
      <section className="testimonial-area-6 gap-bottom-equal">
        <div className="container digikids-animated-shape">
          <div className="row row--40">
            <div className="col-lg-6">
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <span className="pre-title">{pre_title}</span>
                <h2 className="title">{title}</h2>
                <span className="shape-line">
                  <i className="icon-19" />
                </span>
              </div>

              <Swiper
                className="testimonial-activation-5 swiper "
                slidesPerView={1}
                spaceBetween={0}
                modules={[Pagination, Autoplay]}
                loop={loop}
                grabCursor={true}
                speed={1000}
                autoplay={{
                  delay: 3000,
                }}
                pagination={{
                  el: '.swiper-pagination',
                  type: 'bullets',
                  clickable: true,
                }}
              >
                {testimonials.map(({ author, desc, name, ratings, title }, i) => (
                  <SwiperSlide key={i}>
                    <div className="testimonial-slide testimonial-style-3">
                      <div className="content">
                        <div className="rating-icon">
                          {ratings.map(r => (
                            <i key={r} className="icon-23" />
                          ))}
                        </div>
                        <p>{desc}</p>
                        <div className="author-info">
                          <div className="thumb">
                            <Image w={70} h={70} src={author} alt="Testimonial" />
                          </div>
                          <div className="info">
                            <h5 className="title">{name}</h5>
                            <span className="subtitle">{title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>

            <div className="col-lg-6">
              <div
                className="video-gallery video-gallery-5"
                data-sal-delay="150"
                data-sal="slide-left"
                data-sal-duration="800"
              >
                <div className="thumbnail">
                  <Image w={545} h={353} src="/assets/images/about/videoCover.png" alt="Thumb" />
                  <button onClick={() => setIsVideoOpen(true)} className="video-play-btn video-popup-activation">
                    <i className="icon-18" />
                  </button>
                </div>
                <div className="content">
                  <h4 className="title">{video_title}</h4>
                </div>
              </div>
            </div>
          </div>
          <ul className="shape-group">
            <motion.li
              className="shape-2 scene"
              data-sal-delay="200"
              data-sal="fade"
              data-sal-duration="1000"
              animate={{
                x: mouseReverse(30).x,
                y: mouseReverse(30).y,
              }}
            >
              <Image w={186} src="/assets/images/about/shape-25.png" alt="Shape" />
            </motion.li>
            <motion.li
              className="shape-3 scene"
              data-sal-delay="200"
              data-sal="fade"
              data-sal-duration="1000"
              animate={{
                x: mouseDirection(40).x,
                y: mouseDirection(40).y,
              }}
            >
              <span />
            </motion.li>
          </ul>
        </div>
        <ul className="shape-group">
          <li className="shape-1" data-sal-delay="200" data-sal="fade" data-sal-duration="1000">
            <Image w={186} className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape" />
          </li>
        </ul>
      </section>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  )
}

export default TestimonialArea
