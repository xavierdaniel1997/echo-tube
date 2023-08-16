import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {closeMenu} from "../redux/appNavSlice";
import {useParams} from "react-router-dom";
import {useSearchParams} from "react-router-dom";

const WatchVideo = () => {
  const parmas = useParams();
  console.log(parmas);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useState(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <iframe
        width="800"
        height="450"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
