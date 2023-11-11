import React from 'react'

function Parts({partName, index, zIndex}) {
  return (
      <img src={`character/${partName}/${index}.png`} alt='' id='body' width={260} style={{zIndex, position: 'absolute', left: 0, top: 0}}/>

  )
}

export default Parts