import React from 'react'
import App from '../App'
import Rater from './Rater'
import {BrowseRouter,Routes,Route} from 'react-dom'

export default function() {
  return (
    <div>
      <img src= 'image/img.png' width={400} className='center'></img>
      <h1 style={{textAlign: "center"}}>Gaming laptop</h1>
      <h2 style={{textAlign: "center"}}>Rs.4,00,000 only</h2>
      <h3 style={{textAlign: "center"}}>This is the best gaming laptop (aukat me ho to hi khareed na )</h3>
      <Rater/>
    </div>
  )
}
