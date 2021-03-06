import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) => {

	const videoItems = props.propname.map((videoData) => {
		//passing the videoData into a prop named videoData, as well as uinque key (etag)
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={videoData.etag}
				videoData={videoData} />
		);
	});

    return (
		<section id="video-list-item">
			<ul className="col-md-4 list-group">
	  	  	{videoItems}
	        </ul>
		</section>
  );
}

export default VideoList;



//defining a functional component
// class VideoList extends Component {
//   const videos = props.videos;
//   render() {
//     return (<ul className="col-md-4 list-group"></ul>);
//   }
// }
//
// export default VideoList;


//same same
// const videoItems = props.propname.map(function(videosData) {
