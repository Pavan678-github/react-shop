import React from 'react'
import DetailInfo from '../../../components/DetailInfo'

import { getInfoData } from '../../../fetch/detail/detail'

class Info extends React.Component {
  state = {
    info: false
  }
  componentDidMount() {
    // 获取商户信息
    this.getInfo()
  }

  getInfo() {
    const id = this.props.id
    const result = getInfoData(id)
    result.then(json => {
      this.setState({
        info: json
      })
    }).catch(ex => {
      console.error('详情页，获取商户信息出错')
    })
  }

  render() {
    return (
      <div>
        {
          this.state.info
          ? <DetailInfo {...this.state.info}/>
          : ''
        }
      </div>
    )
  }
}

export default Info