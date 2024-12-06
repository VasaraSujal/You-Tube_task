import './Mainmenu.css'
import img18 from "../Img/search.png";
import img19 from "../Img/mic.png";
import img20 from "../Img/create.png";
import img21 from "../Img/bell.png";
import img22 from "../Img/more.png";
import img23 from "../Img/Coke.png";



function Mainmenu() {

    return (

        <>

            <div className="container3">
                <input className="search" type="text" placeholder="Search" />
                <div className="search1">
                    <img src={img18} alt="" />
                </div>
                <div className="mic">
                    <img src={img19} alt="" />
                </div>
                <div className="create">
                    <img src={img20} alt="" />
                </div>
                <div className="bell">
                    <img src={img21} alt="" />
                </div>
                <div className="more">
                    <img src={img22} alt="" />
                </div>
                <div className="profile">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(2).png" alt="" />
                </div>

                <hr className="new" />

                <div className="container4">
                    <div className="child new3">All</div>
                    <div className="child">coke studio</div>
                    <div className="child">UX</div>
                    <div className="child"> Case study</div>
                    <div className="child">Music</div>
                    <div className="child">bnagla lofi</div>
                    <div className="child">Tour</div>
                    <div className="child">Saintmartin</div>
                    <div className="child">Tech</div>
                    <div className="child">iphone 13</div>
                    <div className="child">User Interface Design</div>
                    <div className="child">computer</div>
                </div>

                <hr className="new2" />

                <div className="container2">
                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-8.png" alt="" /> <img className="img3" src={img23} alt="" /><p className="name">Bulbuli | Coke Studio Bangla | Season one | Ritu Raj X Nandita</p><span className="name2">Coke studio bangla</span><img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" /><span className="name2">1.5Mviews . 2 days ago</span></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-9.png" alt="" /> 

                        {/* {data.map((i)=>(
                            <>
                                <img className='img2' src={i.img} />
                            </>
                        ))} */}


                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(4).png" alt="" className="img3" /><p className="name">Infinix Note 12:<br />AMOLED</p><span className="name2">ATC Andriod TOTO Company</span><img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" /><span className="name2">4.5Mviews . 2 days ago</span><p className="name"></p></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-10.png" alt="" /> 
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(3).png" alt="" className="img3" /><p className="name">My First Ux Design case study-<br /> This got me my first job</p><span id="name3" className="name2">Saptarshi Prakash</span><img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" />&nbsp;&nbsp;&nbsp;<span id="name2" className="name2">4.8Kviews .1 years ago</span></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-11.png" alt="" />
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(4).png" alt="" className="img3" /><p className="name">Bulbuli | Coke Studio Bangla | Season one | Ritu Raj X Nandita</p><span className="name2">Coke studio bangla</span><img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" /><span className="name2">1.5Mviews . 2 days ago</span></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-4.png" alt="" />
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(4).png" alt="" className="img3" /><p className="name">UX Design - What is it? (From Aj& Smart)</p><span className="name2">Coke studio bangla</span><img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" /><span className="name2">1.5Mviews . 2 days ago</span></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-5.png" alt="" />
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(3).png" alt="" className="img3" /><p className="name">Bulbuli | Coke Studio Bangla | Season one | Ritu Raj X Nandita</p><span className="name2">Coke studio bangla</span><img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" /><span className="name2">1.5Mviews . 2 days ago</span></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-6.png" alt="" /> 
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(5).png" alt="" className="img3" /><p className="name">Bulbuli | Coke Studio Bangla | Season one | Ritu Raj X Nandita</p><span className="name2">Coke studio bangla</span><img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" /><span className="name2">1.5Mviews . 2 days ago</span></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-7.png" alt="" /> 
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(6).png" alt="" className="img3" /><p className="name">14 Advanced Tips to Design FASTER in Fign-,a</p><span className="name2">Coke studio bangla</span><img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" /><span className="name2">53Kviews . 1 years ago</span></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail.png" alt="" />
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(4).png" alt="" className="img3" /><p className="name">Bulbuli | Coke Studio Bangla | Season one | Ritu Raj X Nandita</p><span className="name2">Coke studio bangla</span><img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" /><span className="name2">1.5Mviews . 2 days ago</span></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-1.png" alt="" />
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(3).png" alt="" className="img3" />
                        <p className="name">Bulbuli | Coke Studio Bangla | Season one | Ritu Raj X Nandita</p>
                        <span className="name2">Coke studio bangla</span>
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" />
                        <span className="name2">1.5Mviews . 2 days ago</span></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-2.png" alt="" />
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(5).png" alt="" className="img3" />
                        <p className="name">Bulbuli | Coke Studio Bangla | Season one | Ritu Raj X Nandita</p>
                        <span className="name2">Coke studio bangla</span>
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" />
                        <span className="name2">1.5Mviews . 2 days ago</span></div>

                    <div className="items">
                        <img className="img2" src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-3.png" alt="" />
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(6).png" alt="" className="img3" />
                        <p className="name">Bulbuli | Coke Studio Bangla | Season one | Ritu Raj X Nandita</p>
                        <span className="name2">Coke studio bangla</span>
                        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" alt="" className="img4" />
                        <span className="name2">1.5Mviews . 2 days ago</span></div>
                </div>
            </div>

        </>

    )

}

export default Mainmenu