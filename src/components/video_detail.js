import React from 'React';

const VideoDetail = (props) => {
	const videoData = props.propname;
	console.log(videoData);
	// const videoID = videoData.id.videoId;
	// console.log.props.videoData;
	// const url = `https://www.youtube.com/embed/${videoID}`;
//	  'https://www.youtube.com/embed/' + videoId; --- same same

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item"></iframe>
			</div>
			<div className="details">

			</div>
		</div>

	)

}

export default VideoDetail;
