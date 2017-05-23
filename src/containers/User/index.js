import React from 'react';
import { connect } from 'react-redux'
import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
  componentDidMount() {
    // 如果没有登录，跳到登录页面
    if (!this.props.userinfo.username) {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div>
        <Header history={this.props.history} title="用户主页" backRouter="/"/>
        <UserInfo username={this.props.userinfo.username} city={this.props.userinfo.cityName}/>
        <OrderList username={this.props.userinfo.username}/>
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
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
