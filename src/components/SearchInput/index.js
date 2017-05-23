import React from 'react'
import './style.css'

class SearchInput extends React.Component {
  state = {
    value: ''
  }

  ChangeHandle = (e) => {
    this.setState({ value: e.target.value })
  }

  KeyUpHandle = (e) => {
    if (e.keyCode !== 13) return
    this.props.enterHandle(this.state.value)
  }

  render() {
    return (
      <input
        className="search-input" 
        type="text" 
        placeholder="请输入关键字" 
        onChange={this.ChangeHandle}
        onKeyUp={this.KeyUpHandle}
        value={this.state.value}/>
    )
  }
}

export default SearchInput