import React, {useEffect, useState} from "react";
import {YOUTUBE_VIDEO_API} from "../utils/config";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";


const VideoContainer = () => {
  const [getVideos, setGetVideos] = useState([]);

  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setGetVideos(json?.items);
  };
  
  return (
    
    <div className="flex flex-wrap gap-5 justify-start pt-5">
      {getVideos.map((videoInfo, index) => (
        <Link to={"/watch?v="+videoInfo.id} key={videoInfo.id} ><VideoCards videoInfos={videoInfo}/></Link>
      ))}
      
    </div>

  );
};

export default VideoContainer;
