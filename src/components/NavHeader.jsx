import {faBars, faL, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import youtubelogo from "../assets/pngwing.com.png";

import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../redux/appNavSlice";
import {YOUTUBE_SERACH_API} from "../utils/config";
import {Link} from "react-router-dom";

const NavHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSugesestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugesestion = async () => {
    console.log("API CALL" + searchQuery);
    const data = await fetch(YOUTUBE_SERACH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="px-10 py-2 grid grid-cols-3 items-center sticky">
      <div className="flex items-center gap-5">
        <div className="text-2xl cursor-pointer">
          <FontAwesomeIcon icon={faBars} onClick={() => toggleMenuHandler()} />
        </div>

        <div>
          <a href="/">
            <img src={youtubelogo} alt="" className="w-28" />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="w-96 py-1 px-4  outline-none border-2 border-gray-300 rounded-l-full text-gray-500 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchResults(true)}
            onBlur={() => setShowSearchResults(false)}
          />
          {showSearchResults && <div className="fixed bg-gray-50 w-96 rounded-md shadow-2xl shadow-slate-600">
            <ul className="m-3">
              {
                suggestions.map((searchRes) => (
                  <div className="flex items-center p-2 hover:bg-slate-300">
                    <FontAwesomeIcon icon={faSearch} />
                    <li className="pl-3 text-lg">{searchRes}</li>
                  </div>
                ))}
            </ul>
          </div>}
        </div>
        <button className="border-2 border-gray-300 py-1 px-4 rounded-r-full text-gray-500 bg-gray-200 text-lg">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="flex justify-end">
        <div className="border-2 border-gray-500 w-10 h-10 flex justify-center items-center rounded-full">
          <FontAwesomeIcon icon={faUser} className="text-2xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
