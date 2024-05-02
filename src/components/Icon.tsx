import '../styles/Icon.less'

export type IconStyle = 'cube' | 'folder' | 'github' | 'linkedin' | 'steam' | 'mail' | 'controller'
export type IconColor = 'green-highlight' | 'off-white' | 'minty-green'

type IconParams = {
  style: IconStyle,
  color: IconColor,
  onClick?: () => null,
}

function Icon(params: IconParams) {
  const {style, color, onClick} = params

  return (
    <>
      <div className='icon-container'>
        <div className={`icon ${style} ${color}`} onClick={onClick}></div>
      </div>
    </>
  )
}

export default Icon