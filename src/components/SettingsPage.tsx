import React, { useState} from "react";
import settingsBG from "../assets/settingsMenu.png"
import screwdriver from "../assets/screwdriver.png"

interface SettingsPageProps {
    onClick: () => void;
    getItem: () => void;
    screwDriverCollected: boolean;
    override: boolean;
}

const SettingsPage: React.FC<SettingsPageProps> = ({onClick, getItem, screwDriverCollected, override}) => {
    const [gotItem, setGotItem] = useState(false);
        return (
            <div className="">
                <div className="z-[5] relative container w-auto h-auto">
                    <img className={`w-full`} src={settingsBG}/>
                    <button onClick={onClick} className="absolute xbutton top-[2%] right-[3%]">
                            <p className="scale-x-[4] scale-y-[3]">X</p>
                    </button>
                    {!gotItem && !screwDriverCollected && !override && <img onClick={() => {getItem(); setGotItem(true)}} className={`absolute w-[10%] top-[20%] right-[25%] `} src={screwdriver}/>}
                </div>
                
                
            </div>
        
      )
}

 export default SettingsPage