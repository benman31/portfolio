import '../styles/ContactMe.less'
import Icon from './Icon'

function ContactMe() {
  return (
    <>
      <div id='contact-me'>
        <a href='mailto:enman.ben@gmail.com'>
          <div className='button-border'>
            <Icon style='mail' color='minty-green'></Icon>
            <p>get in touch</p>
          </div>
        </a>
      </div>
    </>
  )
}

export default ContactMe