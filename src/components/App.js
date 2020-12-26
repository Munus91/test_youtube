import React from 'react';
import SearchBar from '../components/SearchBar.js';
import VideoList from '../components/VideoList.js';
import VideoDetail from '../components/VideoDetail.js';
import youtube from '../apis/youtube.js';

const KEY='AIzaSyBUZ0tEbO08J8PA_-Ldvl_SdJZprDlVZx0';//


class App extends React.Component{
    
    state={ videos: [], selectedVideo: null };
    
    componentDidMount(){
        this.onTermSubmit('elefant');
    }
    
    onTermSubmit = async term =>{
       // console.log(term);
       //MAKING REQUEST TO YOUTUBE
      const response = await youtube.get('/search',{
           params:{
            q:term,  
            part: 'snippet',
            type: 'video',
            maxresults: 5,
            key: KEY
           }
       });
       
       this.setState({
           videos: response.data.items,
           selectedVideo:response.data.items[0]
       });
       console.log("RESPONSE: "+response.data);
    };
    
    onVideoSelect = (video)=>{
       this.setState({selectedVideo: video}); 
    };
    
    
    
    render(){
        
        return(
                <div className="ui container"> 
                <SearchBar onFormSubmit={this.onTermSubmit}/> 
                  <div className="ui grid">
                   <div className="ui row">
                    <div className="eleven wide column">
                     <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                     <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                   </div>
                  </div>       
                </div>
        );
        }
}

export default App;


