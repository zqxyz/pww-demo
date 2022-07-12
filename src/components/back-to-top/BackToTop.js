import Container from "../container/Container"

const BackToTop = () => {
  return (
    <Container>
      <div id="back-to-top-container">
        <a
          href="#"
          id="back-to-top"
          onClick={window.scrollTo(0, 0)}
        >
          <div id="scroll-up-arrow">
            <div className="vertical-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
              </svg>
            </div>
          </div>
          <div id="back-to-top-link-text">
            Back to top
            </div>
        </a>
      </div>
    </Container>
  )
}

export default BackToTop