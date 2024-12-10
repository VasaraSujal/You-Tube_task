const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

// import img3 from "../src/Img/home.png";
// import img4 from "../src/Img/explore.png";
// import img5 from "../src/Img/shorts.png";
// import img6 from "../src/Img/subscription.png";


const data = [
    {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true", title:"Home"},
    {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true", title:"Explores"},
    {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true", title:"Shorts"},
    {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true", title:"subscription"}
];

const data2 = [
    {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true", title:"Library"},
    {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true", title:"History"},
    {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true", title:"Your Videos"},
    {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true", title:"Watch Later"},
    {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true", title:"Liked Videos"},
    {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true", title:"Show more"}
];

app.get('/data', (req,res)=>{
    res.json(data);
});

app.get('/data2', (req,res)=>{
    res.json(data2);
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});