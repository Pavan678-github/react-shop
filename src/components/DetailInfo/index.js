import React from 'react'
import Star from '../../components/Star'

import './style.css'

const DetailInfo = ({img, title, star, price, subTitle, desc}) => {
  return (
    <div id="detail-info-container">
      <div className="info-container clear-fix">
        <div className="info-img-container float-left">
          <img src={img} alt=""/>
        </div>
        <div className="info-content">
          <h1>{title}</h1>
          <div className="star-container">
            {/* 引用 Star 组件 */}
            <Star star={star}/>
            <span className="price">￥{price}</span>
          </div>
          <p className="sub-title">{subTitle}</p>
        </div>
      </div>
      {/* 设置 innerHTML */}
      <p dangerouslySetInnerHTML={{__html: desc}} className="info-desc"></p>
    </div>
  )
}

export default DetailInfo