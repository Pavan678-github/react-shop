import React from 'react'
import Item from './Item'

import './style.css'

const OrderList = ({data, submitComment}) => (
  <div>
  {
    data.map((item, index) => {
      return <Item key={index} data={item} submitComment={submitComment}/>
    })
  }
  </div>
)

export default OrderList