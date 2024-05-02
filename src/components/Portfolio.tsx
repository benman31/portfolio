import '../styles/Portfolio.less'
import Icon from './Icon'
import SectionHeader from './SectionHeader'
import TransitionWrapper from './TransitionWrapper'

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  {
    title: string,
    desc: string,
    githubURL?: string,
    steamURL?: string,
    playURL?: string,
    footer?: string
  }

  //TODO: add links to playable, and detailed descriptions
  const PORTFOLIO_LIST: CardProps[] = [
    {
      title: "Diebrary",
      desc: "A choose-your-own-adventure-novel-themed async multiplayer arena rogue-like (game genre naming conventions are neat!) in the vein of Vampire Survivors.",
      playURL: "https://play.diebrary.rip/?",
      steamURL: "https://store.steampowered.com/app/1619420/Diebrary/",
      footer: "TypeScript / Node.js / Vue.js / PostgreSQL"
    },
    {
      title: "Loot.io",
      desc: "A live multiplayer rogue-like loot-shooter with an extremely deep weapon system with near infinite permutations, hundreds of collectible pets and cosmetics, and robust player marketplace.",
      playURL: "https://loot.io/",
      footer: "TypeScript / Node.js / Vue.js / PostgreSQL"
    },
    {
      title: "Snow Removal Simulator 2023",
      desc: "Capstone graduation project at UPEI - A first person game about snow removal, leveraging the marching cubes algorithm for real-time 3D mesh manipulation.",
      githubURL: "https://github.com/benman31/snow-removal-sim",
      footer: "C# / Unity3D"
    },
    {
      title: "PFX System",
      desc: "A simple particle effects rendering system written for a graphics programming assignment at UPEI.",
      githubURL: "https://github.com/benman31/pfxSystem",
      footer: "C++ / OpenGL"
    },
  ]


//TODO: handle text overflow
// TODO: add feedback to link icons
function Card(props: CardProps) {
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-title'>{props.title}</div>
        <div className='card-links'>
          {
            props.githubURL &&
            <a title='check out the Github repository' href={props.githubURL} target='_blank'>
              <Icon style={'github'} color={'minty-green'}></Icon>
            </a>
          }
          {
            props.steamURL &&
            <a title='check out the Steam Page' href={props.steamURL} target='_blank'>
              <Icon style={'steam'} color={'minty-green'}></Icon>
            </a>
          }
          {
            props.playURL &&
            <a title='play the web version' href={props.playURL} target='_blank'>
              <Icon style={'controller'} color={'minty-green'}></Icon>
            </a>
          }
        </div>
      </div>
      <div className='card-description'>{props.desc}</div>
      {
        props.footer &&
        <div className='card-footer'>{props.footer}</div>
      }
    </div>
  )
}

function Portfolio() {
  const cardList = PORTFOLIO_LIST.map((item, idx) => {
    return (
    <TransitionWrapper key={idx} transitionDelay={idx * 100}>
      <Card {...item} key={idx}></Card>
    </TransitionWrapper>)
  })
  return (
    <div id='portfolio'>
      <TransitionWrapper transitionDelay={0}>
        <SectionHeader title='// portfolio'></SectionHeader>
      </TransitionWrapper>
      <div className='outer-cards-container'>
        <div className='cards-grid'>
          {cardList}
        </div>
      </div>
    </div>
  )
}

export default Portfolio