
import React, { useState } from 'react'
import angelImg from '../assets/paintings/Angel.jpeg'
import cloudsImg from '../assets/paintings/Clouds.jpeg'
import flowImg from '../assets/paintings/Flow.jpeg'
import handImg from '../assets/paintings/Hand.jpeg'
import poolImg from '../assets/paintings/Pool.jpeg'
import protectImg from '../assets/paintings/Protect.jpeg'

interface GalleryProps {
    onClick: () => void;
    crowbarCollected: boolean;
    override: boolean;
}

const Gallery: React.FC<GalleryProps> = ({onClick, crowbarCollected, override}) => {
      const [activeImg, setActiveImg] = useState('');
      const [crowbar, setCrowbar] = useState(true);
    //document.addEventListener('click', () => { if (activeImg != '') {setActiveImg('')}});
    return (
        <div className='mx-auto'>
            
        <div className="grid grid-cols-4 mx-auto">
            <div onClick={() => {setActiveImg(angelImg)}} className={`bg-auto painting hover:animate-grow hover:scale-[110%] animate-shrink m-[1vw] bg-[url('/src/assets/paintings/Angel.jpeg')]`}>
                <div className={`relative bg-no-repeat frame h-full w-auto bg-[url('/src/assets/frameArt.png')] `}/>
            </div>
            <div onClick={() => {setActiveImg(cloudsImg)}} className={`bg-auto painting hover:animate-grow hover:scale-[110%] animate-shrink m-[1vw] bg-[url('/src/assets/paintings/Clouds.jpeg')]`}>
                <div className={`relative bg-no-repeat frame h-full w-auto bg-[url('/src/assets/frameArt.png')] `}/>
            </div>
            <div onClick={() => {setActiveImg(flowImg)}} className={`bg-auto painting hover:animate-grow hover:scale-[110%] animate-shrink m-[1vw] bg-[url('/src/assets/paintings/Flow.jpeg')]`}>
                <div className={`relative bg-no-repeat frame h-full w-auto bg-[url('/src/assets/frameArt.png')] `}/>
            </div>
            <div onClick={() => {setActiveImg(handImg)}} className={`bg-auto painting hover:animate-grow hover:scale-[110%] animate-shrink m-[1vw] bg-[url('/src/assets/paintings/Hand.jpeg')]`}>
                <div className={`relative bg-no-repeat frame h-full w-auto bg-[url('/src/assets/frameArt.png')] `}/>
            </div>
            <div onClick={() => {setActiveImg(poolImg)}} className={`bg-auto painting hover:animate-grow hover:scale-[110%] animate-shrink m-[1vw] bg-[url('/src/assets/paintings/Pool.jpeg')]`}>
                <div className={`relative bg-no-repeat frame h-full w-auto bg-[url('/src/assets/frameArt.png')] `}/>
            </div>
            <div onClick={() => {setActiveImg(protectImg)}} className={`bg-auto painting hover:animate-grow hover:scale-[110%] animate-shrink m-[1vw] bg-[url('/src/assets/paintings/Protect.jpeg')]`}>
                <div className={`relative bg-no-repeat frame h-full w-auto bg-[url('/src/assets/frameArt.png')] `}/>
            </div>
            {!override && <div onClick={() => { if(!crowbarCollected && crowbar){onClick();} setCrowbar(false)}} className={`bg-auto painting hover:animate-grow hover:scale-[110%] animate-shrink m-[1vw] 
            ${crowbar && !crowbarCollected ? `bg-[url('/src/assets/paintings/Crowbar.jpeg')]` : `bg-[url('/src/assets/paintings/CrowbarEmpty.jpeg')]` }`}>
                <div className={`relative bg-no-repeat frame h-full w-auto bg-[url('/src/assets/frameArt.png')] `}/>
            </div>}
        </div>
            {activeImg != '' && <div onClick={() => {setActiveImg('')}} className={`fixed top-[0] left-[0] bg-[rgb(0,0,0)]/70 w-[100%] h-[100%]`}></div>}
            {activeImg != '' && <div className='absolute container pointer-events-none'>
                <img className='mx-auto h-[calc(25vh+25vw)] border-solid rounded-lg border-[10px]' src={activeImg} alt="" />
            </div>}

        </div>
    );
}
export default Gallery