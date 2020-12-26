import React from 'react';
import VideoItem from '../components/VideoItem.js';


const VideoList = ({videos, onVideoSelect})=>{
    //MAPPING
    const renderedList=videos.map((video)=>{
       return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>; 
    });
    
    
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;