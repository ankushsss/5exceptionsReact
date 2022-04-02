import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div style={{display:"flex " , background:"silver", padding:"10px"}}>
        <div><Link style={{textDecoration:"none"}} to="/">Form</Link></div>
        <div style={{marginLeft:"10px"}}><Link style={{textDecoration:"none"}} to="/list">Information</Link></div>
    </div>
  )
}
