//react
import React, { Component}  from 'react';

class SearchBar extends Component {

  constructor(props) {
      super(props);

      //define state, only in constructor
      this.state = {
        term: '',
      };
  }

  render() {
      return (
          <div>
            <input onChange={e => this.setState({term: e.target.value})} />
            Value of input: {this.state.term}
          </div>
      );
  }
 }


export default SearchBar;
