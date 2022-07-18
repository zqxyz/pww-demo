import './calendar-and-updates.css'

const CalendarEvents = () => {
  return (
    <div id="calendar-events">

      <h2 className="header-style-2">
        Calendar of Events
      </h2>


      <div className="calendar-item">

        <div className="calendar-date-slot">
          <div className="calendar-date">
            <div className="calendar-date-month">
              NOV
            </div>
            <div className="calendar-date-day">
              22
            </div>
          </div>
        </div>

        <div className="calendar-item-contents">
          <div className="calendar-item-info">
            <span
              className="badge"
              data-badge-color='orange'
            >
              Updated
            </span>
            <h3 className="calendar-item-title">
              Board of Economic Advisers Meeting
            </h3>
            <ul className="calendar-item-list">
              <li className="calendar-item-list-location">
                Room 417, Bowers Conference Room,
                Rembert Dennis Building
              </li>
              <li className="calendar-item-list-time">
                1:30 PM
              </li>
              <li className="calendar-item-list-contact">
                (803) 734-2265
              </li>
            </ul>
          </div>
        </div>

      </div>


      <div className="calendar-item">

        <div className="calendar-date-slot">
          <div className="calendar-date">
            <div className="calendar-date-month">
              NOV
            </div>
            <div className="calendar-date-day">
              22
            </div>
          </div>
        </div>

        <div className="calendar-item-contents">
          <div className="calendar-item-info">
            <span
              className="badge"
              data-badge-color='red'
            >
              Cancelled
            </span>
            <h3 className="calendar-item-title">
              Board of Economic Advisers Meeting
            </h3>
            <ul className="calendar-item-list">
              <li className="calendar-item-list-location">
                Room 417, Bowers Conference Room,
                Rembert Dennis Building
              </li>
              <li className="calendar-item-list-time">
                1:30 PM
              </li>
              <li className="calendar-item-list-contact">
                (803) 734-2265
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="calendar-item">

        <div className="calendar-date-slot">
          <div className="calendar-date">
            <div className="calendar-date-month">
              NOV
            </div>
            <div className="calendar-date-day">
              22
            </div>
          </div>
        </div>

        <div className="calendar-item-contents">
          <div className="calendar-item-info">
            <h3 className="calendar-item-title">
              Board of Economic Advisers Meeting
            </h3>
            <ul className="calendar-item-list">
              <li className="calendar-item-list-location">
                Room 417, Bowers Conference Room,
                Rembert Dennis Building
              </li>
              <li className="calendar-item-list-time">
                1:30 PM
              </li>
              <li className="calendar-item-list-contact">
                (803) 734-2265
              </li>
            </ul>
          </div>
        </div>

      </div>


      <button
        type="button"
        value="submit"
        className="view-more-btn"
      >
        View All Events
      </button>

    </div>
  )
}

export default CalendarEvents