import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./title.css"
const Title = ({title,subTitle}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}
export default Title;
