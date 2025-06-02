import React, { use, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import websiteIntro from '../assets/websiteIntro.mp4'
import websiteIntro2 from '../assets/websiteIntro2.mp4'
import myFace from '../assets/myFace.jpg'
import myFaceEvil from '../assets/myFaceEvil.jpg'

interface HomeProps {
    override: boolean
}

const Home: React.FC<HomeProps> = ({override}) => {
    const [videoUrl, setVideoUrl] = useState(websiteIntro);
    const [auto, setAuto] = useState(false);
    function SwapVideo() {
        setVideoUrl(websiteIntro2);
        setAuto(false);
    }
    return (
        <div>
            <h3 className="text-4xl p-[2%]"> Welcome to my {!override ? "Game..." : "Portfolio Website!"}</h3>
            <div>
                <img className="float-right w-[30%]" src={override ? myFace : myFaceEvil} alt="" />
                {override && <p className="text-2xl text-left">Hello! My name is Lucien Williams. I am a Game Developer and Software Engineer based out of Seattle, WA. 
                    I have designed this website to showcase a variety of projects I've worked on but as a bonus element I have also made it into a game.
                    If you would like to play the game, click on the large 'Game OFF' button at the top of your screen. Otherwise, feel free to look through the site
                    and thank you for visiting!</p>}
                {!override && <p className="text-2xl text-left">Hello! My name is Lucien Williams. I am a Game Developer and Software Engineer based out of Seattle, WA. 
                    I have designed this website to showcase a variety of projects I've worked on but as a bonus element I have also made it into a game.
                    Welcome to the game. You might notice there isn't much to interact with here. You'll have to search for items to help you access the rest of the site.
                    Good luck!</p>}
            </div>
            <video className="mx-auto p-[1%] h-[calc(8vh+10vw)]" src={videoUrl} controls muted autoPlay={auto}></video>
        </div>
    )
}

export default Home