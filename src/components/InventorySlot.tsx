import React from "react";
import windowImg from '../assets/window.png'
import windowImgLit from '../assets/windowLit.png'

interface InventorySlotProps {
    itemID?: string;
    imageUrl?: string;
    onClick: () => void;
    highlight: boolean;
}

const InventorySlot: React.FC<InventorySlotProps> = ({itemID, imageUrl, onClick, highlight}) => {

        return (
            <div onClick={() => {if (itemID != ""){onClick()}}} className={`w-[6vh] h-[6vh]`}>
                <img src={highlight ? windowImgLit : windowImg} alt="Angel" className="" />
                <div className={`bg-cover relative top-[-6vh] w-full h-full ${imageUrl}`}>

                </div>
            </div>
      )
}

 export default InventorySlot;