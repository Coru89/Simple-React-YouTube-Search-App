//React
import React from 'react';
import ReactDOM from 'react-dom';

//App components
import SearchBar from './components/search_bar.js';

//Youtube API Key
const API_KEY = 'AIzaSyCk5KNg4nMvk9x-vEPy1EkpHkEiBaMEwFE';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
