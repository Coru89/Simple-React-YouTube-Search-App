//React
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//App components
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from  './components/video_detail.js';

//Youtube Data API Key
const API_KEY = "AIzaSyDPT9OTS4mxxY8shxN_Hpj09Uodd1a8KPE";

class App extends React.Component {
    constructor(props) {
        super(props);

		this.state = {
	      videos: []
	    }

          YTSearch({key: API_KEY, term: 'booty'}, (videoData) => {
          this.setState({ videos: videoData });
        }
    )
}

    render() {
        return (
            <div>
              <SearchBar />
			  <VideoDetail />
              <VideoList propname={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
