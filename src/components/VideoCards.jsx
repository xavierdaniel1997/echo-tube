import React from "react";

const VideoCards = ({videoInfos}) => {

  const {snippet, statistics} = videoInfos;
  const {thumbnails, title, channelTitle} = snippet;
  return (
    <div className="w-72">
      <div className="">
        <img
          src={thumbnails.medium.url}
          alt="thumbnails"
          className="rounded-lg"
        />
      </div>
      <div>
        <h1 className="font-bold text-lg overflow-hidden whitespace-nowrap w-56 md:w-auto">
          {title}
        </h1>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCards;
