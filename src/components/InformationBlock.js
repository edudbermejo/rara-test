import React from 'react'

import './InformationBlock.css'

function InformationBlock({label, info}){
  return (
    <div className="information-block">
      <span className="information-block-label">{label}</span>
      <span className="information-block-info">{info || '-'}</span>
    </div>
  )
}

export default InformationBlock