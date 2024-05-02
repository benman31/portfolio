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
  return (
    <>

        <Header></Header>

      <div className='main-content'>
        <AnimatedLogo></AnimatedLogo>
        <Intro></Intro>
        <TransitionWrapper transitionDelay={100}>
          <About></About>
        </TransitionWrapper>
        <TransitionWrapper transitionDelay={100}>
          <Resume></Resume>
        </TransitionWrapper>
        {/* <TransitionWrapper transitionDelay={100}> */}
          <Portfolio></Portfolio>
        {/* </TransitionWrapper> */}
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
