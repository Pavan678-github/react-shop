import React from 'react'
import SearchInput from '../SearchInput'

import './style.css'

class SearchHeader extends React.Component {

  clickHandle = () => {
    this.props.history.goBack()
  }

  enterHandle = (value) => {
    value = value ? value : 'all'
    this.props.history.replace('/searchall/' + encodeURIComponent(value))
  }

  render() {
    return (
      <div id="search-header" className="clear-fix">
        <span className="back-icon float-left" onClick={this.clickHandle}>
          <i className="icon-chevron-left"></i>
        </span>
        <div className="input-container">
          <i className="icon-search"></i> &nbsp;
          <SearchInput enterHandle={this.enterHandle}/>
        </div>
      </div>
    )
  }
}

export default SearchHeader