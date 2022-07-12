import React from 'react'
import Container from '../container/Container'
import RecentUpdates from './RecentUpdates'
import CalendarEvents from './CalendarEvents'

const CalendarAndUpdates = () => {
  return (
    <Container>
      <div className='update-row'>

        <CalendarEvents />

        <RecentUpdates />

      </div>
    </Container>
  )
}

export default CalendarAndUpdates