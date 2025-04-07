import React, { memo } from 'react'

const ChildComponent = memo((props) => {
    console.log("child component rerendered")
  return (
    <div>
      <h1>THis is child component</h1>
      <button onClick={props.handlebuttton}>{props.buttonName}</button>
    </div>
  )
})

export default ChildComponent
