
// import React, { useState, useEffect } from "react";
// import "./Mainmenu.css";
// import img18 from "../Img/search.png";
// import img19 from "../Img/mic.png";
// import img20 from "../Img/create.png";
// import img21 from "../Img/bell.png";
// import img22 from "../Img/more.png";
// import img23 from "../Img/Coke.png";

// const API_KEY = "AIzaSyB-Zfrq-g9mxd5nnn1yw-ryXWMc9CUP9k8";

// function Mainmenu() {
//   const [videos, setVideos] = useState([]);
//   const [query, setQuery] = useState("");
//   const [maxResults, setMaxResults] = useState(20);
//   const [selectedVideoId, setSelectedVideoId] = useState(null); // State for selected video ID


// useEffect(()=>{
//   fetchVideos();
// }, [1]);

//   // Fetch videos based on the query
//   const fetchVideos = (searchQuery) => {
//     const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=${maxResults}&q=${searchQuery}`;
//     fetch(API_URL)
//       .then((response) => response.json())
//       .then((data) => {
//         setVideos(data.items);
//         console.log(data.items);
//       })
//       .catch((error) => console.error("Error fetching YouTube data:", error));
//   };

//   const handleSearch = () => {
//     const searchInput = document.querySelector(".search").value;
//     if (searchInput) {
//       setQuery(searchInput); // Set query state for potential debugging or reference
//       fetchVideos(searchInput); // Fetch videos directly when the user searches
//     }
//   };

//   return (
//     <>
//       <div className="container3">
//         <input className="search" type="text" placeholder="Search" />
//         <div className="search1" onClick={handleSearch}>
//           <img src={img18} alt="Search Icon" />
//         </div>
//         <div className="mic">
//           <img src={img19} alt="Mic Icon" />
//         </div>
//         <div className="create">
//           <img src={img20} alt="Create Icon" />
//         </div>
//         <div className="bell">
//           <img src={img21} alt="Bell Icon" />
//         </div>
//         <div className="more">
//           <img src={img22} alt="More Icon" />
//         </div>
//         <div className="profile">
//           <img
//             src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(2).png"
//             alt="Profile"
//           />
//         </div>

//         <hr className="new" />

//         <div className="container4">
//           <div className="child new3">All</div>
//           <div className="child">Coke Studio</div>
//           <div className="child">UX</div>
//           <div className="child">Case Study</div>
//           <div className="child">Music</div>
//           <div className="child">Bangla Lofi</div>
//           <div className="child">Tour</div>
//           <div className="child">Saint Martin</div>
//           <div className="child">Tech</div>
//           <div className="child">iPhone 13</div>
//           <div className="child">User Interface Design</div>
//           <div className="child">Computer</div>
//         </div>

//         <hr className="new2" />

//         <div className="container2">
//           {selectedVideoId ? ( // Show iframe if a video is selected
//             <div className="videoPlayer">
//               <iframe
//                 width="1160px"
//                 height="500px"
//                 src={`https://www.youtube.com/embed/${selectedVideoId}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title="YouTube Video Player"
//               ></iframe>
//               <button onClick={() => setSelectedVideoId(null)}>Close</button>
//             </div>
//           ) : (
//             videos.map((video) => (
//               <div
//                 className="items"
//                 key={video.id.videoId}
//                 onClick={() => setSelectedVideoId(video.id.videoId)} // Set video ID on click
//               >
//                 <img
//                   className="img2"
//                   src={video.snippet.thumbnails.medium.url}
//                   alt={video.snippet.title}
//                 />
//                 <img className="img3" src={img23} alt="Channel Icon" />
//                 <p className="name">{video.snippet.title}</p>
//                 <span className="name2">{video.snippet.channelTitle}</span>
//                 <img
//                   src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png"
//                   alt="Verified"
//                   className="img4"
//                 /><br />
//                 <span className="name2">1M views . 1 day ago</span>
//               </div>
//             ))
//           )}
//         </div>

          

//       </div>
//     </>
//   );
// }

// export default Mainmenu;




import React, { useState, useEffect } from "react";
import "./Mainmenu.css";
import img18 from "../Img/search.png";
import img19 from "../Img/mic.png";
import img20 from "../Img/create.png";
import img21 from "../Img/bell.png";
import img22 from "../Img/more.png";
import img23 from "../Img/Coke.png";
import Sidebar from "./Sidebar";

const API_KEY = "AIzaSyDnLYPWrbVSM-iGRH03mB7w99hg4bI_qRw";

function Mainmenu() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const [maxResults, setMaxResults] = useState(2);
  const [selectedVideoId, setSelectedVideoId] = useState(null); // State for selected video ID


useEffect(()=>{
  fetchVideos();
}, [1]);

  // Fetch videos based on the query
  const fetchVideos = (searchQuery) => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=${maxResults}&q=${searchQuery}`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        console.log(data.items);
      })
      .catch((error) => console.error("Error fetching YouTube data:", error));
  };

  const handleSearch = () => {
    const searchInput = document.querySelector(".search").value;
    if (searchInput) {
      setQuery(searchInput); // Set query state for potential debugging or reference
      fetchVideos(searchInput); // Fetch videos directly when the user searches
    }
  };

  return (
    <>
      <div>

        <Sidebar 
          getDataFile={fetchVideos}
        />

      <div className="container3">
        <input className="search" type="text" placeholder="Search" />
        <div className="search1" onClick={handleSearch}>
          <img src={img18} alt="Search Icon" />
        </div>
        <div className="mic">
          <img src={img19} alt="Mic Icon" />
        </div>
        <div className="create">
          <img src={img20} alt="Create Icon" />
          55
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
          {selectedVideoId ? ( // Show iframe if a video is selected
            <div className="videoPlayer">
              <iframe
                width="1160px"
                height="500px"
                src={`https://www.youtube.com/embed/${selectedVideoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video Player"
              ></iframe>
              <button onClick={() => setSelectedVideoId(null)}>Close</button>
            </div>
          ) : (
            videos.map((video) => (
              <div
                className="items"
                key={video.id.videoId}
                onClick={() => setSelectedVideoId(video.id.videoId)} // Set video ID on click
              >
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
                /><br />
                <span className="name2">1M views . 1 day ago</span>
              </div>
            ))
          )}
        </div>

          

      </div>

      </div>
    </>
  );
}

export default Mainmenu;