import React from 'react'
import './style.css'

class LoadMore extends React.Component {
  constructor(props) {
    super(props)
    this.timeoutId = null
    this.autoLoad = this.autoLoad.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.autoLoad, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.autoLoad)
  }

  // 自动滚动加载
  autoLoad() {
    
    if (this.props.isLoading) {
      return
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.timeoutId = setTimeout(callback.bind(this), 50)

    function callback() {
      var top = this.refs.wrapper.getBoundingClientRect().top // 元素上边距离页面上边的距离
      var windowHeight = window.screen.height
      if (top && top < windowHeight) {
        this.props.loadMoreFn()
      }
    }
  }

  loadMoreHandle() {
    // 执行传输过来的
    this.props.loadMoreFn();
  }

  render() {
    return (
      <div className="load-more" ref="wrapper">
        {
          this.props.isLoading
          ? <span>加载中...</span>  
          : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }
}

export default LoadMore