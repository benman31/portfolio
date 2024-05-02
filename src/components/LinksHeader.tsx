import '../styles/LinksBar.less'
import Icon from './Icon'

function LinksHeader() {
  return (
    <>
      <div className='links-container'>
        <a title={'e-mail me'} href='mailto:enman.ben@gmail.com'>
        <Icon style='mail' color='off-white'></Icon>
        </a>
        <a title={'visit my GitHub page'} href='https://github.com/benman31' target='_blank'>
          <Icon style='github' color='off-white'></Icon>
        </a>
        <a title={'visit my LinkedIn profile'} href='https://www.linkedin.com/in/benjamin-enman-6a7524152' target='_blank'>
          <Icon style='linkedin' color='off-white'></Icon>
        </a>
      </div>
    </>
  )
}

export default LinksHeader