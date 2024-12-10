
import React, { useState, useEffect } from "react";
import "./Mainmenu.css";
import img18 from "../Img/search.png";
import img19 from "../Img/mic.png";
import img20 from "../Img/create.png";
import img21 from "../Img/bell.png";
import img22 from "../Img/more.png";
import img23 from "../Img/Coke.png";

const API_KEY = "AIzaSyBubDBOcL6ZjX6ClWh_33qWXpIg8wHsKAU";

function Mainmenu() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("music");

  // Fetch videos based on the query
  const fetchVideos = (searchQuery) => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=12&q=${searchQuery}`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.error("Error fetching YouTube data:", error));
  };

  useEffect(() => {
    fetchVideos(query);
  }, [query]);

  const handleSearch = () => {
    const searchInput = document.querySelector(".search").value;
    if (searchInput) {
      setQuery(searchInput);
    }
  };

  return (
    <>
      <div className="container3">
        <input
          className="search"
          type="text"
          placeholder="Search"
        />
        <div className="search1" onClick={handleSearch}>
          <img src={img18} alt="Search Icon" />
        </div>
        <div className="mic">
          <img src={img19} alt="Mic Icon" />
        </div>
        <div className="create">
          <img src={img20} alt="Create Icon" />
        </div>
        <div className="bell">
          <img src={img21} alt="Bell Icon" />
        </div>
        <div className="more">
          <img src={img22} alt="More Icon" />
        </div>
        <div className="profile">
          <img
            src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(2).png"
            alt="Profile"
          />
        </div>

        <hr className="new" />

        <div className="container4">
          <div className="child new3">All</div>
          <div className="child">Coke Studio</div>
          <div className="child">UX</div>
          <div className="child">Case Study</div>
          <div className="child">Music</div>
          <div className="child">Bangla Lofi</div>
          <div className="child">Tour</div>
          <div className="child">Saint Martin</div>
          <div className="child">Tech</div>
          <div className="child">iPhone 13</div>
          <div className="child">User Interface Design</div>
          <div className="child">Computer</div>
        </div>

        <hr className="new2" />

        <div className="container2">
          {videos.map((video) => (
            <div className="items" key={video.id.videoId}>
              <img
                className="img2"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <img className="img3" src={img23} alt="Channel Icon" />
              <p className="name">{video.snippet.title}</p>
              <span className="name2">{video.snippet.channelTitle}</span>
              <img
                src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png"
                alt="Verified"
                className="img4"
              />
              <span className="name2">1M views . 1 day ago</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Mainmenu;
