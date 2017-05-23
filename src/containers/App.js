import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RouterMap from '../router/routeMap'
import localStore from '../util/localStorge'
import * as userInfoActions from '../actions/userinfo'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initDone: false
    }
  }

  componentDidMount() {
    // 从localstoreage获取城市
    let cityName = localStore.getItem('CITYNAME')
    if (cityName == null) { // 既判断undifend又判断null
      cityName = '北京'
    }

    // 将城市信息存储在Redux中
    this.props.userInfoActions.update({
      cityName: cityName
    })

    this.setState({
      initDone: true
    })
    
  }

  render() {
    return (
      <div className="App">
        {
          this.state.initDone
          ? <RouterMap/>
          : <div>加载中...</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchProps)(App)
