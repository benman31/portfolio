import '../styles/Intro.less'
import ContactMe from './ContactMe'

function Intro() {
  return (
    <>
      <div id="intro">
        <h2>hey, it's <span>Ben</span>.</h2>
        <div className='intro-container'>
          <p>I’m a <span>software engineer</span> and <span>game programmer</span> based in Atlantic Canada. I built this website to serve as both an <span>interactive portfolio</span> to showcase my work, and an excuse to learn <span>React</span></p>
          <ContactMe></ContactMe>
        </div>
      </div>
    </>
  )
}

export default Intro