import '../styles/About.less'
import SectionHeader from "./SectionHeader"
import TransitionWrapper from './TransitionWrapper'

// Since this list is static anyway, I'm just keeping it as straight JSX and avoid devising some convoluted templating scheme for the nested <span> elements
const SKILLS_LIST: JSX.Element[] = [
  (<li key={0}>Custom game engine for web with <span>TypeScript / Node.js, Vue.js, Pixi.js and PostgreSQL</span></li>),
  (<li key={1}><span>C# and Unity</span> for voxel-based 3D game development</li>),
  (<li key={2}><span>C++ and OpenGL</span> for 3D graphics programming and custom game engines</li>),
  (<li key={3}><span>Java</span> for various school projects and OOP foundational learning</li>),
  (<li key={4}><span>Python</span> for various machine learning projects at school</li>),
  (<li key={5}><span>React.js and Vite.js</span> for building this site</li>),
  (<li key={6}><span>Git, GitHub, GitLab</span> for source control</li>)
]

function About() {
  const skills = SKILLS_LIST.map((item, idx) => {
    const transitionDelay = (idx + 1) * 100
    return (<TransitionWrapper key={idx}transitionDelay={transitionDelay}>{item}</TransitionWrapper>)
  })
  return (
    <div id='about'>
      <TransitionWrapper transitionDelay={0}>
        <SectionHeader title='// about me'></SectionHeader>
      </TransitionWrapper>
        <div className='about-content'>
          <div className='text-container'>
          <TransitionWrapper transitionDelay={0}>
            <p>
              I recently graduated from the <span>University of Prince Edward Island</span> with a <span>BSc.
              in computer science</span>, and have nearly <span>2.5 years</span> of game programming
              experience at <span>Other Ocean Interactive</span>.
              Getting my start in game development was a dream come true and I'm currently <span>looking to start my next adventure</span>.
            </p>
            <p>
              Here's a list of some of the tech I've worked with on my projects.
            </p>
          </TransitionWrapper>
          <ul>
            {skills}
          </ul>
          </div>
          <TransitionWrapper transitionDelay={100}>
            <div className="about-pic"></div>
          </TransitionWrapper>
        </div>
    </div>
  )
}

export default About