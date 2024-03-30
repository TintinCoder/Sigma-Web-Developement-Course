import React from 'react'

function Navbar(props) {
  return (
    <>
        <div className="card">
            <h1>{props.title}</h1>
        </div>
    </>
  )
}

export default Navbar
