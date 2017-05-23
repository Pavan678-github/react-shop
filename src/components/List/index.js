import React from 'react'
import Item from './Item'
import './style.css'

class HomeHeader extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div className="list-container">
        {
          data.map((item, index) => {
            return <Item key={index} {...item}/>
          })
        }
      </div>
    )
  }
}

export default HomeHeader