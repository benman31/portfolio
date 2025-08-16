import '../styles/Resume.less'
import SectionHeader from "./SectionHeader"
import { useState } from 'react'
import TransitionWrapper from './TransitionWrapper'

type TabSelectorParams = {
  label: string
  isSelected: boolean
  onClick: () => void
}

type Job = {
  title: string,
  companyName: string,
  date: string,
  duties: string[]
}

type ResumeDisplayParams = React.HTMLAttributes<Element> & {job: Job}

const WORK_EXPERIENCE: Job[] = [
  {
    title: 'Software Engineer',
    companyName: 'Iron Fox Games',
    date: 'June 2024 - Present',
    duties: [
      `Solo-developed Space Obby (20M+ plays) plus the entire level editor and asset pipeline — delivered in < 3 months. Tripled web game division revenue for over 8 months.`,
      `In collaboration with artists, & designers developed 5+ web games in  < 12 months. Including the recently released Floor is Lava.`,
      `Refactored and optimized proprietary game engine and built tooling & art pipeline for web games division, streamlining asset handling, compression, and optimization. Saved company over $10k in Unity license fees by replacing it with open source & proprietary tools.`,
      `Programmed 3D gameplay logic, physics (Rapier), and shaders in Three.js/WebGL along with responsive UI in React. Implemented multiplayer logic, backend services (Node.js, Express, PostgreSQL), and browser multithreading.`,
      `Participated in code reviews, production deploys, organized production meetings and retros while striving for the continuous improvement and support of our team’s work flow.`

    ]
  },
  {
    title: 'Programmer',
    companyName: 'Other Ocean Interactive',
    date: 'May 2021 - Sept 2023',
    duties: [
      `Worked with a small team to develop the game - Diebrary - participating in
      every stage of its development on a short (12 month) development timeline`,
      `Wrote developer tools and interfaces for testers, artists and designers`,
      `Engineered core gameplay systems including Enemy AI behavior, itemization
      trees, and player movement / combat`,
      `Wrote backend endpoints, schema, queries, and migrations to support features
      such as in-game currency transactions, progress persistance, and settings preferences`,
      `Reviewed teammates' code, managed version control in git, wrote documents
      and patch notes, and shared CI/CD duties with other coders`,
      `Adapted quickly to an ever-evolving set of requirements within each sprint as
      the team’s agile, iterative approach to game development often required
      flexibility, clear communication and organized context switching`
    ]
  },
  {
    title: 'English Instructor',
    companyName: 'Freelance English Teaching',
    date: 'Dec 2017 - Aug 2019',
    duties: [
      `Conducted in-house business English classes on a contract basis at various
       firms throughout Berlin including Deutsche Bahn, BASF and Kayak `,
      `Created customized content for each individual client while adhering to the guidelines
       and best practices placed by the language schools through which the teaching contracts were negotiated`,
      `Built a steady base of private clients who enjoyed the customized content of the lessons and thrived in the one-to-one learning environment `,
    ]
  },
  {
    title: 'Assistant Language Teacher',
    companyName: 'Tatsuno Kita High School',
    date: 'Aug 2012 - Aug 2017',
    duties: [
      `Developed curriculum, lesson plans, tests and rubrics for English
      language communication classes by adapting existing material to meet specified requirements in addition to creation of original material `,
      `Supported teachers in grading, student performance evaluation, and developing strategies to motivate students and maximize learning potential `,
      `Maintained strong ties to local community through organization of intercultural education activities such as cooking classes and community meet-and-greets`,
    ]
  }
]

function TabSelector(params: TabSelectorParams) {
  const { label, isSelected, onClick } = params
  return (
    <div className='tab'>
      <button
        className={isSelected ? 'selected' : ''}
        onClick={onClick}>
          { label }
      </button>
    </div>
  )
}

function ResumeDisplay(params: ResumeDisplayParams) {
  const {job, hidden} = params

  return !hidden && (
    <div className='display'>
      <div className='title-and-company-container'>
        <div className='job-title'>{ job.title }</div>
        <div className='company-name'>{ job.companyName }</div>
      </div>
      <div className='dates'> { job.date } </div>
      <ul>
        {
          job.duties.map((item, idx) => {
            return (
              <TransitionWrapper key={idx} transitionDelay={(idx + 1) * 100}>
                <li key={idx}>{ item }</li>
              </TransitionWrapper>)
          })
        }
      </ul>
    </div>
  )
}

function StatefulContainer() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const indicatorPosition = { "--tab-index": selectedIdx } as React.CSSProperties;
  
  const tabList = WORK_EXPERIENCE.map((job, idx) => {
    const isSelected = selectedIdx === idx
    return (
      <TabSelector
        key={idx}
        label={job.companyName}
        isSelected={isSelected}
        onClick={() => setSelectedIdx(idx)}
      ></TabSelector>
    )
  })
  const displayList = WORK_EXPERIENCE.map((job, idx) => {
    const isSelected = selectedIdx === idx
    return (
        <ResumeDisplay
          key={idx}
          hidden={!isSelected}
          job={job}
        >
        </ResumeDisplay>
    )
  })
  return (
    <div className='stateful-container'>
      <TransitionWrapper transitionDelay={0}>
        <div className='tab-selection'>
          <div className='tab-container'>
            {tabList}
          </div>
          <div className='selection-indicator'>
            <div className='indicator-fg' style={indicatorPosition}></div>
          </div>
        </div>
      </TransitionWrapper>
      <TransitionWrapper transitionDelay={0} threshold={0.1}>
        {displayList}
      </TransitionWrapper>
    </div>
  )
}

function Resume() {
  return (
    <div id='resume'>
      <TransitionWrapper transitionDelay={0}>
        <SectionHeader title="// resume"></SectionHeader>
      </TransitionWrapper>
      <div>
        <StatefulContainer></StatefulContainer>
      </div>
    </div>
  )
}

export default Resume