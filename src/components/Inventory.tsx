import React, { useState } from "react";
import InventorySlot from "./InventorySlot";

interface InventoryProps {
    itemIDs: string[];
    itemURLs: string[];
    show: boolean;
    onClick: (index: number) => void;
}

const Inventory: React.FC<InventoryProps> = ({itemIDs, itemURLs, onClick, show}) => {

    const [activeIndex, setActiveIndex] = useState(-1)

        return (
        <div className={`${activeIndex == -1 && !show ? "hover:animate-fadein hover:opacity-[100%] animate-fadeout opacity-[10%]":""} inset-x-[calc(45vw-18vh)]
         z-10 fixed bottom-[3vh] border-[4px] border-[grey] bg-betterbrown py-[1vh] rounded-xl`}>
            <div className="flex justify-center space-x-[calc(2vw)]">
                <InventorySlot itemID={itemIDs[0]} imageUrl={itemURLs[0]} highlight={activeIndex == 0} onClick={() => {onClick(0); setActiveIndex(0)}}></InventorySlot>
                <InventorySlot itemID={itemIDs[1]} imageUrl={itemURLs[1]} highlight={activeIndex == 1} onClick={() => {onClick(1); setActiveIndex(1)}}></InventorySlot>
                <InventorySlot itemID={itemIDs[2]} imageUrl={itemURLs[2]} highlight={activeIndex == 2} onClick={() => {onClick(2); setActiveIndex(2)}}></InventorySlot>
                <InventorySlot itemID={itemIDs[3]} imageUrl={itemURLs[3]} highlight={activeIndex == 3} onClick={() => {onClick(3); setActiveIndex(3)}}></InventorySlot>
                <InventorySlot itemID={itemIDs[4]} imageUrl={itemURLs[4]} highlight={activeIndex == 4} onClick={() => {onClick(4); setActiveIndex(4)}}></InventorySlot>
            </div>

        </div>
      )
}

 export default Inventory