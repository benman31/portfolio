import '../styles/SectionHeader.less'

type SectionTitleParam = { title: string }

function SectionHeader(param: SectionTitleParam) {
  
  return (
    <>
      <div className="section-header">
        <h1>{param.title}</h1>
        <div className="section-divider"></div>
      </div>
    </>
  )
}

export default SectionHeader