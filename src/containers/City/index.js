import React from 'react';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'


import * as userInfoActions from '../../actions/userinfo'
import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStorge'

class City extends React.Component {
  state = {
    redirectToReferrer: false
  }

  changeCity(newCity) {
    if (newCity == null) {
      return
    }

    var userinfo = this.props.userinfo
    userinfo.cityName = newCity
    this.props.userInfoActions.update(userinfo)

    localStore.setItem(CITYNAME, newCity)

    this.setState({
      redirectToReferrer: true
    })

  }

  render() {

    if (this.state.redirectToReferrer) {
      return (
        <Redirect to='/'/>
      )
    }

    return (
      <div style={{height: '1000px'}}>
        <Header title="选择城市"/>
        <CurrentCity title="北京"/>
        <CityList changeFn={this.changeCity.bind(this)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(City)