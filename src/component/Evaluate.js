import React from 'react'

export default function Evaluate() {
    let x = 10;
    let y = 5;
  return (
    <div>
        <h1>Expression Evaluation</h1>
        <h3> {x+'>'}{y+':'}
        {(x>y)?"True":"False"}</h3>
    </div>
  )
}
