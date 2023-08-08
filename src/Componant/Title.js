import React from 'react'

export default function Title({title}) {
    const topper=(title)=>{
       return title.charAt(0).toUpperCase() + title.slice(1);
    }
  return (
    <div>
      <div className="section-title" style={{textDecoration:"underline",fontFamily:"cursive"}}>
      <h1>{topper(title)}</h1>
      <div></div>
    </div>
    </div>
  )
}
