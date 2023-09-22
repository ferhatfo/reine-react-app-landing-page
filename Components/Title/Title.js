import React from 'react'
import './Title.scss'
function Title({ h2, p }) {
  return (
    <>
        <div className='pageTitle'>
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
    </>
  )
}

export default Title
