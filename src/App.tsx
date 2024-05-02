import './styles/App.less'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import AnimatedLogo from './components/AnimatedLogo'

function App() {
  return (
    <>

        <Header></Header>

      <div className='main-content'>
        <AnimatedLogo></AnimatedLogo>
        <Intro></Intro>
        <About></About>
        <Resume></Resume>
        <Portfolio></Portfolio>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
