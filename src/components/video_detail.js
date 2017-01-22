import React from 'React';

const VideoDetail = (props) => {
	const videoData = props.propname;

		if (!videoData) {
			return <div>Loading...</div>;
		}

	// console.log(videoData);
	const videoID = videoData.id.videoId;
	// console.log.props.videoData;
	const url = `https://www.youtube.com/embed/${videoID}`;
//	  'https://www.youtube.com/embed/' + videoId; --- same same

	return (
		<section id="video-detail">
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe src={url} className="embed-responsive-item"></iframe>
				</div>
				<div className="details">
					<div>{videoData.snippet.title}</div>
					<div>{videoData.snippet.description}</div>
				</div>
			</div>
		</section>

	)

}

export default VideoDetail;
