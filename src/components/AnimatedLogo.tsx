import { useState } from 'react';
import '../styles/AnimatedLogo.less';

//type Vec2D = {x: number, y: number}

const sides = [
  'show-front',
  'show-left',
  'show-back',
  'show-right',
]

function AnimatedLogo() {
  const [current, setCurrent] = useState(0)

  const handleClick = () => {
    setCurrent((current + 1)%4)
  }

  return (
    <div id="animated-logo">
      <div className="logo-scene">
        <div className={`parent-transform ${sides[current]}`} onClick={handleClick}>
          <div className={"cube"}>
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default AnimatedLogo