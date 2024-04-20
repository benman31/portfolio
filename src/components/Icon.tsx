import '../styles/Icon.less'

type IconStyle = 'cube' | 'folder' | 'github' | 'linkedin' | 'mail'
type IconColor = 'icon-green-highlight' | 'icon-off-white' | 'icon-light-minty-green'

type IconParams = {
  style: IconStyle,
  color: IconColor,
  onClick?: () => null,
}

function Icon(params: IconParams) {
  const {style, color, onClick} = params

  return (
    <>
      <div>
        <div className={`icon ${style} ${color}`} onClick={onClick}></div>
      </div>
    </>
  )
}

export default Icon