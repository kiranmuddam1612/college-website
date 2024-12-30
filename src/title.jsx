import React from 'react'
import "./title.css"
const Title = ({titles,sTitle}) => {
  return (
    <div className='title'>
        <p>{sTitle}</p>
      <h2>{titles}</h2>
    </div>
  )
}
export default Title;
