import './calendar-and-updates.css'

const RecentUpdates = () => {
  return (
    <div id="recent-updates">

      <h2 className="header-style-2">
        Recent Updates
      </h2>

      <div className="update-item">
        <a className='bold-link' href="#">
          Local Government Finance
        </a>
        <div className="grey-text">
          General text with no meaning that won't
          have a big effect on your day and isn't
          worth worrying about.
        </div>
        <span className="update-meta-text">
          <strong>Published: </strong>
          Jan 90rd, 1992
        </span>
        <span className="badge">
          Updated
        </span>
      </div>

      <div className="update-item">
        <a className='bold-link' href="#">
          Transportation Network Carrier Maps
        </a>
        <div className="grey-text">
          {/* No text */}
        </div>
        <span className="update-meta-text">
          <strong>Published: </strong>
          Flarbuary 3st, 2005
        </span>
        <span className="badge">
          New
        </span>
      </div>

      <div className="update-item">
        <a className='bold-link' href="#">
          BEA Long-Range General Fund Revenue Plan for FY
          2019-20 to FY 2022-23
        </a>
        <div className="grey-text">
          Unimportant filler text. Take it or leave it.
        </div>
        <span className="update-meta-text">
          <strong>Published: </strong>
          April 35th, 2021
        </span>
        <span className="badge">
          Updated
        </span>
      </div>

      <div className="update-item">
        <a className='bold-link' href="#">
          Budget Development
        </a>
        <div className="grey-text">
          {/* No description */}
        </div>
        <span className="update-meta-text">
          <strong>Published: </strong>
          July 6th, 2022
        </span>
        <span className="badge">
          New
        </span>
      </div>

      <button
        type="button"
        value="submit"
        className="view-more-btn"
      >
        View More
      </button>

    </div>
  )
}

export default RecentUpdates