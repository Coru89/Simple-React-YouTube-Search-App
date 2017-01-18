import React, { Component}  from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends Component {

  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div>
            <input onChange={e => console.log(e.target.value)} />
          </div>
      );
  }
 }


export default SearchBar;

// ReactDOM.render(< SearchBar />, querySelector());
