//React
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//App components
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';

//Youtube Data API Key
const API_KEY = "AIzaSyDPT9OTS4mxxY8shxN_Hpj09Uodd1a8KPE";



class App extends React.Component {
    constructor(props) {
        super(props);

          YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
          this.setState({ videos });
        }
    )

    this.state = {
      videos: []
    }

}
    render() {
        return (
            <div>
              <SearchBar />
              <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
