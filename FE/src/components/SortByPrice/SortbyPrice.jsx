import React, { useState } from 'react'
import './sortbyprice.css'

const SortbyPrice = () => {
  const [isActive,setIsActive] = useState(false);
  return (
    <div className='dropdown'>
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>Sort by Price
        <span className='fas fa-caret-down'></span>
      </div>
      {isActive && (
      <div className="dropdown-content">
        <div className="dropdown-item">
            Giá thấp tới cao
        </div>
        <div className="dropdown-item">
            Giá cao tới thấp
        </div>
      </div>
      )}
    </div>
  )
}

export default SortbyPrice
