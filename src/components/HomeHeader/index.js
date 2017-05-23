import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './style.css'

class HomeHeader extends React.Component {
  state = {
    kwd: '',
    redirectToSearch: false
  }

  ChangeHandle = (e) => {
    var val = e.target.value ? e.target.value : 'all'
    this.setState({
      kwd: val
    })
  }

  KeyUpHandle = (e) => {
    if (e.keyCode !== 13) {
      return
    }
    var val = e.target.value ? e.target.value : 'all'
    this.setState({
      kwd: val,
      redirectToSearch: true
    })
  }

  render() {
    if (this.state.redirectToSearch) {
      return (
        <Redirect push to={'/searchall/' + encodeURIComponent(this.state.kwd)}/>
      )
    }

    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <Link to="/login">
            <i className="icon-user"></i>
          </Link>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            <input
              type="text"
              placeholder="请输入关键字"
              value={this.state.kwd}
              onKeyUp={this.KeyUpHandle}
              onChange={this.ChangeHandle}/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader