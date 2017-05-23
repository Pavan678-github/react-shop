import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Item = ({id, title, img, distance, mumber, price, subTitle}) => (
  <div className="list-item clear-fix">
    <Link to={'/detail/' + id}>
      <div className="item-img-container float-left">
        <img src={img} alt={title}/>
      </div>
      <div className="item-content">
        <div className="item-title-container clear-fix">
          <h3 className="float-left">{title}</h3>
          <span className="float-right">{distance}</span>
        </div>
        <p className="item-sub-title">
          {subTitle}
        </p>
        <div className="item-price-container clear-fix">
          <span className="price float-left">￥{price}</span>
          <span className="mumber float-right">已售{mumber}</span>
        </div>
      </div>
    </Link>
  </div>
)

export default Item