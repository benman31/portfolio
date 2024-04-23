import '../styles/Header.less'
import LinksHeader from "./LinksHeader"
import Navigation from "./Navigation"

function Header() {
  return (
    <>
      <div id="header">
        <Navigation></Navigation>
        <LinksHeader></LinksHeader>
      </div>
    </>
  )
}

export default Header