//React
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
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
	      videos: [],
		  selectedVideo: null
	    }
		this.videoSearch('Dank Meme');
		this.onVideoSelect = this.onVideoSelect.bind(this);
	}



	// TODO: reimplement using youtube API from scratch! ;) xoxxoxoxoxox
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videoData) => {
			this.setState({
				videos: videoData,
				selectedVideo: videoData[0]
			});
		})
	}


	//this function is to handle li click
	onVideoSelect(selectedVideo) {
		this.setState({ selectedVideo });
		console.log(this);
	}

    render() {

        return (
            <div>
              <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
			  <VideoDetail propname={this.state.selectedVideo} />
			  <VideoList
 			   	onVideoSelect={this.onVideoSelect}
 			  	propname={this.state.videos} />
            </div>
			//   this function updates state of this app
    		//   this function is being stored into a prop called on VideoSelect
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
