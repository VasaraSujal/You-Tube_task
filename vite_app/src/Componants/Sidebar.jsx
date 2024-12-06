import './Sidebar.css'
import img1 from "../Img/hambarger.png";
import img2 from "../Img/Youtube logo.png";
import img3 from "../Img/home.png";
import img4 from "../Img/explore.png";
import img5 from "../Img/shorts.png";
import img6 from "../Img/subscription.png";
import img7 from "../Img/library.png";
import img8 from "../Img/history.png";
import img9 from "../Img/your_video.png";
import img10 from "../Img/watch_later.png";
import img11 from "../Img/liked.png";
import img12 from "../Img/down_arrow.png";
import img13 from "../Img/Nadir.png";
import img14 from "../Img/Coke.png";
import img15 from "../Img/MKBHD.png";
import img16 from "../Img/Figma.png";
import img17 from "../Img/ATC.png";



function Sidebar() {

    return (

        <>

            <div className="container">
                <img src={img1} alt="hamburger menu" />
                <img className="youtube_logo" src={img2} alt="YouTube logo" /><br />
                <img className="home" src={img3} alt="home icon" />
                <p className="Hunger">Home</p>
                <img src={img4} alt="explore icon" />
                <p className="Hunger">Explores</p>
                <img src={img5} alt="shorts icon" />
                <p className="Hunger">Shorts</p>
                <img src={img6} alt="subscription icon" />
                <p className="Hunger">subscription</p>
                <hr />
                <img src={img7} alt="library icon" />
                <p className="Hunger">Library</p>
                <img src={img8} alt="history icon" />
                <p className="Hunger">History</p>
                <img src={img9} alt="your videos icon" />
                <p className="Hunger">Your Videos</p>
                <img src={img10} alt="watch later icon" />
                <p className="Hunger">Watch Later</p>
                <img src={img11} alt="liked videos icon" />
                <p className="Hunger">Liked Videos</p>
                <img src={img12} alt="show more icon" />
                <p className="Hunger">Show more</p>
                <hr />
                <p className="Subscription">SUBSCRIPTION</p>
                <img src={img13} alt="Nadir on the Go icon" />
                <p className="Hunger">Nadir On The Go</p>
                <img src={img14} alt="Coke Studio Bangla icon" />
                <p className="Hunger">Coke Studio Bangla</p>
                <img src={img15} alt="MKBHD icon" />
                <p className="Hunger">MKBHD</p>
                <img src={img16} alt="Figma icon" />
                <p className="Hunger">Figma</p>
                <img src={img17} alt="Android ToTo Channel icon" />
                <p className="Hunger">Android ToTo C...</p>
                <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true'/>
                <p className="Hunger">AI ux.com</p>
            </div>
        </>

    )

}

export default Sidebar