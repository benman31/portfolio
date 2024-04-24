import '../styles/About.less'
import SectionHeader from "./SectionHeader"

function About() {
  return (
    <>
      <div id='about'>
        <SectionHeader title='// about me'></SectionHeader>
        <div className='about-content'>
          <div className='text-container'>
          <p>
            I'm a recent graduate of the <span>University of Prince Edward Island</span> where I earned a <span>BSc.
            in computer science</span>, and also managed to squeeze in nearly <span>2.5 years</span> of game programming
            experience at <span>Other Ocean Interactive</span> while I studied.
            Getting my start in game development was a dream come true and I'm proud to have been
            a part of the small team that developed and shipped the fast-paced arena rogue-lite shooter <span>Diebrary</span>.
          </p>
          <p>
            Here's a list of some of the tech I've worked with on my projects.
          </p>
          <ul>
            <li>Custom game engine for web with <span>TypeScript / Node.js, Vue.js, Pixi.js and PostgreSQL</span></li>
            <li><span>C# and Unity</span> for voxel-based 3D game development</li>
            <li><span>C++ and OpenGL</span> for 3D graphics programming and custom game engines</li>
            <li><span>Java</span> for various school projects and OOP foundational learning</li>
            <li><span>Python</span> for various machine learning projects at school</li>
            <li><span>React.js and Vite.js</span> for building this site</li>
            <li><span>Git, GitHub, GitLab</span> for source control</li>
          </ul>
          </div>
          <div className="about-pic"></div>
        </div>
      </div>
    </>
  )
}

export default About