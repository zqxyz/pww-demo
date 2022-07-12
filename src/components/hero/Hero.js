import React from 'react'
import './hero.css'

const Hero = () => {
  const [searchInput, setSearchInput] = React.useState('')

  const onSearchInputChangeHandler = e => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (searchInput.length > 1) {
      alert(`Search for '${searchInput}' here`)
    }
  }

  return (
    <div id="hero-container">
      <div id="hero-content">
        <h2 id="hero-header">
          Providing independent research, analysis,
          and resources to facilitate informed policy
          decisions and administration of services
        </h2>
        <form
          id="hero-search-form"
          onSubmit={handleSubmit}

        >

          <input
            type="text"
            id="hero-search-input"
            placeholder="Search rfa.sc.gov"
            onChange={onSearchInputChangeHandler}
            value={searchInput}
          />

          <button
            type="submit"
            value="submit"
            id="hero-search-button"
          >
            SEARCH &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" className="bi bi-search"
              viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397
                1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1
                1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0
                0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0
                1 11 0z"
              />
            </svg>
          </button>

        </form>
      </div>
    </div>
  )
}

export default Hero