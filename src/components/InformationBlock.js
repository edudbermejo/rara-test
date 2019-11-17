import React from 'react'
import './InformationBlock.css'

function InformationBlock({label, info}){
  return (
    <div>
      <span class="information-block-label">{label}</span>
      <span class="information-block-info">{info || '-'}</span>
    </div>
  )
}

export default InformationBlock