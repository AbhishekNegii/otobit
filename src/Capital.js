import React from 'react'
import "./Search.css"

const Capital = (props) => {
    console.log(props.data)
  return (
    <div className="body">
       <h3> {props.data}</h3>
    </div>
  )
}

export default Capital