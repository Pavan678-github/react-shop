import React from 'react';
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

class Search extends React.Component {

  componentDidMount() {
  }

  render() {
    const keyword = this.props.match.params.keyword || '0'
    const category = this.props.match.params.category || 'all'

    return (
      <div>
        <SearchHeader {...this.props}/>
        <SearchList keyword={keyword} category={category}/>
      </div>
    )
  }
}

export default Search