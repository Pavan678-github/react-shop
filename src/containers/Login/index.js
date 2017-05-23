import React from 'react'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActions from '../../actions/userinfo' 

class Login extends React.Component {
  state = {
    checking: true
  }

  componentDidMount() {
    // 判断是否已经登录
    this.doCheck()
  }

  doCheck() {
    const userinfo = this.props.userinfo
    if (userinfo.username) {
      // 已经登录，则跳转到用户主页
      this.goUserPage();
    } else {
      // 未登录，则验证结束
      this.setState({
        checking: false
      })
    }
  }

  // 处理登录之后的事情
  loginHandle = (username) => {
    // 保存用户名
    const actions = this.props.userInfoActions
    let userinfo = this.props.userinfo
    userinfo.username = username
    actions.update(userinfo)

    const params = this.props.match.params
    const router = params.router
    if (router) {
      // 跳转到指定的页面
      this.props.history.push(router)
    } else {
      // 跳转到用户主页
      this.goUserPage()
    }
  }

  goUserPage() {
    this.props.history.push('/user')
  }

  render() {
    return (
      <div>
        <Header title="登录"/>
        <LoginComponent loginHandle={this.loginHandle}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
