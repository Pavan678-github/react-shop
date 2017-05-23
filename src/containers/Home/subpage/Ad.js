import React from 'react'
import HomeAd from '../../../components/HomeAd'
import { getAdData } from '../../../fetch/home/home'

class Ad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
  }

  componentDidMount() {
    const result = getAdData()
    result.then(data => {
      if (data.length) {
        this.setState({
          data: data
        })
      }
    })

  }

  render() {
    return (
      <div>
        {
          this.state.data.length
          ? <HomeAd data={this.state.data}/>
          : <div>{/* 加载中... */}</div>
        }
      </div>
    )
  }
}

export default Ad