//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './styles/App.less'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import AnimatedLogo from './components/AnimatedLogo'
import TransitionWrapper from './components/TransitionWrapper'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className='main-content'>
        <div>
          <AnimatedLogo></AnimatedLogo>
        </div>
        <div>
          <Intro></Intro>
        </div>
        <div>
          <TransitionWrapper transitionDelay={100}>
            <About></About>
          </TransitionWrapper>
        </div>
        <div>
          <TransitionWrapper transitionDelay={100}>
            <Resume></Resume>
          </TransitionWrapper>
        </div>
        <div>
          <TransitionWrapper transitionDelay={100}>
            <Portfolio></Portfolio>
          </TransitionWrapper>
        </div>
      </div>

      <div>
        TODO: Footer Section {/* copywrite and links again? */}
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
