import React from 'react'

import './style.css'

const Star = ({star}) => {
  star = star || 0
  star = star>5 ? star%5 : star

  return (
    <div className="star-container">
      {[1, 2, 3, 4, 5].map((item, index) => {
        const lightClass = star >= item ? ' light' : ''
        return <i key={index} className={'icon-star' + lightClass}></i>
      })}
    </div>
  )
}

export default Star