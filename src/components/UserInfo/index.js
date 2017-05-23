import React from 'react'

import './style.css'

const UserInfo = ({username, city}) => {
  return (
    <div className="userinfo-container">
    <p>
      <i className="icon-user"></i>
      &nbsp;
      <span>{username}</span>
    </p>
    <p>
      <i className="icon-map-marker"></i>
      &nbsp;
      <span>{city}</span>
    </p>
    </div>
  )  
}

export default UserInfo