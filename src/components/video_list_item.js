import React from 'react';

// const video = props.videoData; -same same
const VideoListItem = ({videoData}) => {

	console.log(videoData);
	const imageURL = videoData.snippet.thumbnails.default.url;





	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={imageURL} className="media-object" />
				</div>

				<div className="media-body">
					<div className="media-heading">{videoData.snippet.title}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;
