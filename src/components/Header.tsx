import LinksHeader from "./LinksHeader"
import Navigation from "./Navigation"

function Header() {
  return (
    <>
      <div>TODO: This is a Header</div>
      <div>
        TODO: Navigation header {/* Desktop only */}
        <Navigation></Navigation>
      </div>
      <div>
        TODO: My Links
        <LinksHeader></LinksHeader>
      </div>
    </>
  )
}

export default Header