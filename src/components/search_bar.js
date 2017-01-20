//react
import React, { Component}  from 'react';
import YTSearch from 'youtube-api-search';

class SearchBar extends Component {

  constructor(props) {
      super(props);

      //define state, only in constructor
      this.state = {
        term: ' ',
      };
  }

  render() {
      return (
          <div>
            <input value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
          </div>
      );
  }
 }


export default SearchBar;
