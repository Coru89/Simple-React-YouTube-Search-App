import React, { Component}  from 'react';
// import ReactDOM from 'react-dom';


const VideoList = (props) => {
    return (
      <ul className="col-md-4 list-group">
        {props.videos.length}
      </ul>
  )
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
