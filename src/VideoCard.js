import React from 'react'
import "./VideoCard.css";

function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img src="https://cdn-images-1.medium.com/max/2600/0*HICLyAdNSIyT0ODU.jpg" alt="Img"/>
            <p>This is a film about coding</p>
            <h2>Movie title</h2>
            <p>Number of likes... </p>
            
        </div>
    )
}

export default VideoCard;
