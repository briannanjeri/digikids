import Link from 'next/link'

const PricingTable = ({ title, delay, amount, duration, sm_text, item_off_1, item_off_2 }) => (
  <div className="col-lg-4" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
    <div className="pricing-table">
      <div className="pricing-header">
        <h6 className="title">{title}</h6>
        <div className="price-wrap">
          <span className="amount">KES {amount}</span>
          <span className="duration">{duration}</span>
        </div>
        <p>{sm_text}</p>
      </div>

      <div className="pricing-body">
        <ul className="list-item">
          <li>
            <i className="icon-20" />
            Modules Covered: 1
          </li>
          <li>
            <i className="icon-20" />
            Certificate of Completion
          </li>
          <li>
            <i className="icon-20" />
            Course learning checks
          </li>
          <li>
            <i className="icon-20" />
            Internet safety and awareness
          </li>
          <li>
            <i className="icon-20" />
            {item_off_1 ? 'Available on weekends and holidays' : 'Available any time of the year/month'}
          </li>
          <li className={`${item_off_1 ? 'item-off' : ''}`}>
            <i className="icon-20" />
            Individual tutored classes
          </li>
          <li className={`${item_off_2 ? 'item-off' : ''}`}>
            <i className="icon-20" />
            Robotics Classes
          </li>
        </ul>
      </div>

      <div className="pricing-btn">
        <Link className="digi-btn btn-border btn-medium" href="/register">
          Register
          <i className="icon-east" />
        </Link>
      </div>
    </div>
  </div>
)

const PricingArea = () => {
  return (
    <div className="digi-section-gap">
      <div className="container">
        <div className="section-title section-center" data-sal="slide-up" data-sal-duration="800">
          <span className="pre-title">Pricing Table</span>
          <h2 className="title">Here is what we charge for our Courses</h2>
          <span className="shape-line">
            <i className="icon-19" />
          </span>
        </div>

        <div className="row g-5">
          <PricingTable
            delay="100"
            title="Online Classes"
            amount="7,000"
            duration="Per child per module"
            item_off_1={true}
            sm_text="This is our most popular plan. The students are taught via Google Meet in pools of 4-6 students per class."
            item_off_2={true}
          />

          <PricingTable
            delay="200"
            title="Online Individual Classes"
            amount="20,000"
            duration="Per child per module"
            sm_text="Incase you want to give your child a more personalized learning experience, we offer individual classes."
            item_off_2={true}
          />

          <PricingTable
            delay="300"
            title="In-Person Individual Classes"
            amount="30,000"
            duration="Per child per module"
            sm_text="This options adds the benefit of in-person learning (which includes robotics) to the individual classes."
          />
        </div>
      </div>
    </div>
  )
}

export default PricingArea
