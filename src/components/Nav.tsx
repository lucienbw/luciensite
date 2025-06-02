import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import boardImg from '../assets/screwboard.png';
import gearIcon from '../assets/gearIcon.png';


interface NavProps {
    override: boolean;
    home: boolean;
    gallery: boolean;
    work: boolean;
    onClickSettings: () => void;
    unlockGallery: () => void;
    unlockWork: () => void;
}

const Nav: React.FC<NavProps> = ({override, home, gallery, work, onClickSettings, unlockGallery, unlockWork}) => {
    return (
        <div className="flex h-auto ml-0">
            <nav className="grid grid-cols-3 w-[95%] bg-navcolor rounded-lg m-1 ml-0">
                <h2 className="flex justify-center">
                    {(home || override) && <Link to="/" className="link bg-navcolor rounded-sm text-[calc(1vh+1vw)] m-auto">--Home--</Link>}
                </h2>
                <h2 className="flex justify-center" onClick={() => {if(!gallery && !override){ unlockGallery();}}}>
                    {<Link to="/gallery"  className={` ${gallery || override ? 'link':'link-disabled pointer-events-none select-none'} m-auto bg-contain drop-shadow-lg
                     ${gallery || override ? '' : `bg-[url('/src/assets/screwboard.png')]`} rounded-sm text-[calc(1vh+1vw)]`}>--Gallery--</Link>}

                </h2>
                <h2 className="flex justify-center" onClick={() => {if(!work && !override){ unlockWork();}}}>
                    {<Link to="/work-samples"  className={` ${work || override ? 'link':'link-disabled pointer-events-none select-none'} m-auto bg-cover drop-shadow-lg
                     ${work || override ? '' : `bg-[url('/src/assets/crowboard.png')]`} rounded-sm text-[calc(1vh+1vw)]`}>--Work Samples--</Link>}
                </h2>
            </nav>
            <button className="w-[1] h-auto gearbutton m-[5px] mr-0" onClick={onClickSettings}>
                <img className="h-[40px]" src={gearIcon} />
            </button>
        </div>
    )
}

export default Nav