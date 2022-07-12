import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import Cards from './components/cards/Cards'
import Popular from './components/popular/Popular'
import CalendarAndUpdates from './components/calendar-and-updates/CalendarAndUpdates'
import BackToTop from './components/back-to-top/BackToTop'
import Foot from './components/footer/Foot'

import './main.css'

function App() {
  return (
    <div className="App">
      <Navigation />

      <Hero />
      <Cards />
      <Popular />
      <CalendarAndUpdates />

      <BackToTop />
      <Foot />

    </div>
  );
}

export default App
