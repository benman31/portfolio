//import cubeLogo from '../assets/icons/cube.svg'
import '../styles/AnimatedLogo.less'
import Icon from './Icon'

function AnimatedLogo() {
  return (
    <>
      <div id="animated-cube">
        {/* <div className='icon'></div> */}
        <Icon style='cube' color='green-highlight'></Icon>
      {/* <img src={cubeLogo} className="cube" alt="Animated Cube Logo"/> */}
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
    </>
  )
}

export default AnimatedLogo