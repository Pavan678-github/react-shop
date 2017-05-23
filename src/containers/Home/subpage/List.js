import React from 'react'
import { getListData } from '../../../fetch/home/home'
import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import './style.css'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasMore: false,
      isLoading: false,
      page: 0
    }
  }

  componentDidMount() {
    // 获取首页数据
    this.resultHandle()
  }

  // 加载更多
  loadMoreData() {

    this.setState({
      isLoading: true
    })

    this.resultHandle()
  }

  resultHandle() {
    getListData(this.props.cityName, this.state.page).then(res => {
      this.setState({
        hasMore: res.hasMore,
        page: this.state.page + 1,
        isLoading: false,
        // 注意，这里将最新获取的数据，拼接到原数据之后，使用 concat 函数
        data: this.state.data.concat(res.data)
      })
    })
  }

  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          this.state.data.length
          ? <ListCompoent data={this.state.data}/>
          : <div></div>
        }
        {
          this.state.hasMore
          ? <LoadMore isLoading={this.state.isLoading} loadMoreFn={this.loadMoreData.bind(this)}/>
          : ''
        }
      </div>
    )
  }
}

export default List