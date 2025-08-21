import '../styles/Portfolio.less'
import Icon from './Icon'
import SectionHeader from './SectionHeader'
import TransitionWrapper from './TransitionWrapper'
import floorIsLavaImg from '../assets/videos/floor-is-lava-thumbnail.png'
import floorIsLavaVid from '../assets/videos/floor-is-lava.webm'
import spaceObbyImg from '../assets/videos/space-obby-thumbnail.png'
import spaceObbyVid from '../assets/videos/space-obby-video.webm'
import diebraryImg from '../assets/videos/diebrary-thumbnail.png'
import diebraryVid from '../assets/videos/diebrary.webm'
import lootImg from '../assets/videos/loot-thumbnail.png'
import lootVid from '../assets/videos/loot.webm'
import pfxVid from '../assets/videos/pfx-editor.webm'
import snowImg from '../assets/videos/snow-removal-sim-thumbnail.png'
import snowVid from '../assets/videos/snow-removal-sim.webm'


type CardProps = React.HTMLAttributes<HTMLDivElement> &
  {
    title: string,
    desc: string,
    githubURL?: string,
    steamURL?: string,
    playURL?: string,
    footer?: string,
    videoURL?: string,
    videoPoster?: string
  }

  //TODO: add links to playable, and detailed descriptions
  const PORTFOLIO_LIST: CardProps[] = [
    {
      title: "Floor is Lava",
      desc: "A fast-paced multiplayer platformer. Collect coins as you try to escape the rising lava.",
      playURL: "https://www.coolmathgames.com/0-floor-is-lava",
      footer: "Three.js / TypeScript / Node.js / Colyseus / React / Tailwind",
      videoURL: floorIsLavaVid,
      videoPoster: floorIsLavaImg
    },
    {
      title: "Space Obby",
      desc: "A cute, colorful 3D platformer set in outer space.",
      playURL: "https://spaceobby.com/",
      footer: "Three.js / TypeScript / Node.js / React / less.js",
      videoURL: spaceObbyVid,
      videoPoster: spaceObbyImg
    },
    {
      title: "Diebrary",
      desc: "A choose-your-own-adventure-novel-themed async multiplayer arena rogue-like (game genre naming conventions are neat!) in the vein of Vampire Survivors.",
      playURL: "https://play.diebrary.rip/?",
      steamURL: "https://store.steampowered.com/app/1619420/Diebrary/",
      footer: "Pixi.js / TypeScript / Node.js / Vue.js / PostgreSQL",
      videoURL: diebraryVid,
      videoPoster: diebraryImg
    },
    {
      title: "Loot.io",
      desc: "A live multiplayer rogue-like loot-shooter with an extremely deep weapon system with near infinite permutations, hundreds of collectible pets and cosmetics, and robust player marketplace.",
      playURL: "https://loot.io/",
      footer: "TypeScript / Node.js / Vue.js / PostgreSQL",
      videoURL: lootVid,
      videoPoster: lootImg
    },
    {
      title: "Snow Removal Simulator 2023",
      desc: "Capstone graduation project at UPEI - A first person game about snow removal, leveraging the marching cubes algorithm for real-time 3D mesh manipulation.",
      githubURL: "https://github.com/benman31/snow-removal-sim",
      footer: "C# / Unity3D",
      videoURL: snowVid,
      videoPoster: snowImg
    },
    {
      title: "PFX System",
      desc: "A simple particle effects rendering system written for a graphics programming assignment at UPEI.",
      githubURL: "https://github.com/benman31/pfxSystem",
      footer: "C++ / OpenGL",
      videoURL: pfxVid,
    },
    {
      title: "Portfolio Website",
      desc: "This very website! An ever-evolving showcase of my projects. Developed in React, learning as I go.",
      githubURL: "https://github.com/benman31/portfolio",
      footer: "React / Vite.js / GitHub Pages"
    },
  ]


//TODO: handle text overflow
// TODO: add feedback to link icons
import React, { useRef } from 'react';
function Card(props: CardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <div className='card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='card-header' style={props.videoURL ? { position: 'relative', zIndex: 1 } : {}}>
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
            <a className='animated-pulse' title='play the web version' href={props.playURL} target='_blank'>
              <Icon style={'controller'} color={'minty-green'}></Icon>
              <span className='hidden'>PLAY</span>
            </a>
          }
        </div>
      </div>
      <div className={`card-description ${props.videoURL ? 'playable' : ''}`} style={props.videoURL ? { position: 'relative', zIndex: 1 } : {}}>{props.desc}</div>
      {props.videoURL && (
        <div className='card-video-container'>
          <video
            ref={videoRef}
            className='card-video'
            src={props.videoURL}
            poster={props.videoPoster}
            muted
            loop
            playsInline
            preload='metadata'
          />
        </div>
      )}
      {
        props.footer &&
        <div className={`card-footer ${props.videoURL ? 'playable' : ''}`} style={props.videoURL ? { position: 'relative', zIndex: 1 } : {}}>{props.footer}</div>
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