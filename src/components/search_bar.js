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
	        <section id="search-bar">
	        	<input value={this.state.term} onChange={e => this.onInputChange(e.target.value)} />
	        </section>
      	);
  	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;
