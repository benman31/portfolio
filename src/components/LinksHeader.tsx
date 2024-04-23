import '../styles/LinksBar.less'
import Icon from './Icon'

function LinksHeader() {
  return (
    <>
      <div className='links-container'>
        <Icon style='mail' color='off-white'></Icon>
        <Icon style='github' color='off-white'></Icon>
        <Icon style='linkedin' color='off-white'></Icon>
      </div>
    </>
  )
}

export default LinksHeader