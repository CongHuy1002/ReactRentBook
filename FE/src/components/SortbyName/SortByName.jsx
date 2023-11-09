import React, { useState } from 'react'
import './sortbyname.css'

const SortByName = () => {
  const [isActive,setIsActive] = useState(false);
  return (
    <div className='dropdown'>
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>Sort by Name
        <span className='fas fa-caret-down'></span>
      </div>
      {isActive && (
      <div className="dropdown-content">
        <div className="dropdown-item">
           Từ A đến Z
        </div>
        <div className="dropdown-item">
           Từ Z đến A
        </div>
      </div>
      )}
    </div>
  )
}

export default SortByName
