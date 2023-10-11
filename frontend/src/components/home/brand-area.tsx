import Image from 'next/image'

const brand_contents = {
  pre_title: 'Our Partners',
  title: 'Learn with Our Partners',
  text: 'We have partnered with the best in the industry to bring you the best learning experience.',
  brands: [
    { name: '(ISC) Kenya Chapter', img: '/assets/images/brand/iscKenya.jpeg' },
    { name: 'LittleBits', img: '/assets/images/brand/littleBits.jpeg' },
    { name: 'Wonder workshop', img: '/assets/images/brand/wonder.jpeg' },
    { name: 'Google', img: '/assets/images/brand/google.svg' },
    { name: 'Lego Mindstorms ev3', img: '/assets/images/brand/lego.png' },
    { name: 'Scratch', img: '/assets/images/brand/scratch.png' },
    { name: 'Kodu Game labs', img: '/assets/images/brand/kodu.png' },
    { name: 'Castynet', img: '/assets/images/brand/castynet.png' },
  ],
}

const { pre_title, title, text, brands } = brand_contents

const BrandArea = () => (
  <div className="digi-brand-area brand-area-1 gap-top-equal mb-lg-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="brand-section-heading">
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
              <p>{text}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 ">
          <div className="brand-grid-wrap">
            {brands.map(({ img, name }, i) => (
              <div key={i} className="brand-grid">
                <Image width={100} height={100} src={img} alt={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BrandArea
