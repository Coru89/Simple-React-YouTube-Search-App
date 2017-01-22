import React from 'react';

// const video = props.videoData; -same same
// const VideoListItem = ({videoData}) => {

 const VideoListItem = function (props) {
	const videoData = props.videoData;
	const onVideoSelect = props.onVideoSelect;
	//contains {(selectedVideo) => this.setState({ selectedVideo: selectedVideo }) }

	// console.log(videoData);
	const imageURL = videoData.snippet.thumbnails.default.url;

	return (
		<section id="video-list-item">
			<li onClick={function(){onVideoSelect(videoData)}}
				className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img src={imageURL} className="media-object" />
					</div>

					<div className="media-body">
						<div className="media-heading">{videoData.snippet.title}</div>
					</div>
				</div>
			</li>
		</section>
	);
}

export default VideoListItem;
