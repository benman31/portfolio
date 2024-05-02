import '../styles/Navigation.less'

function Navigation() {
  return (
    <>
      <div className='nav-container'>
        <a className={"my-name"} href='#'>Ben Enman</a>
        <a href="#intro">Home</a>
        <a href="#about-me">About</a>
        <a href="#resume">Resume</a>
        <a href="#portfolio">Portfolio</a>
      </div>
    </>
  )
}

export default Navigation