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
          <About></About>
        </div>
        <div>
          TODO: Resume section {/* Interactive */}
          <Resume></Resume>
        </div>
        <div>
          TODO: Portfolio Section
          <Portfolio></Portfolio>
        </div>
      </div>

      <div>
        TODO: Footer Section {/* copywrite and links again? */}
        <Footer></Footer>
      </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
       */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
