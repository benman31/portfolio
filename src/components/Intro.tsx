import '../styles/Intro.less'
import ContactMe from './ContactMe'

function Intro() {
  return (
    <>
      <div id="intro">
        <h2>// hi, <span>Ben</span> here.</h2>
        <h1>// welcome to my site</h1>
        <p>/* I’m a <span>software engineer</span> and <span>game developer</span> based in Atlantic Canada. I built this website to serve as both an interactive portfolio to showcase my work, and an excuse to learn <span>React</span> */</p>
        <ContactMe></ContactMe>
      </div>
    </>
  )
}

export default Intro