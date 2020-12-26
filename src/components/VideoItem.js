import '../components/VideoItem.css';
import React from 'react';

const VideoItem =({video, onVideoSelect}) =>{
    //return <div>Video Item</div>; 
    return (
            //()=> cause calling onVideoSelect(video) will be called with empty argument
            //дочерний компонент VideoItem передаёт значение в App
            <div onClick={()=> onVideoSelect(video)} className="video-item item"> 
             <img 
             className="ui image" 
             alt={video.snippet.title} 
             src={video.snippet.thumbnails.medium.url} 
             />
             <div className="content">
              <div className="header">{video.snippet.title}</div>
             </div>        
            </div>
            
            );  
};


export default VideoItem;