import React, { useState} from "react";

interface OverrideButtonProps {
    onClick: () => void;
    isActive: boolean;
}

const OverrideButton: React.FC<OverrideButtonProps> = ({onClick, isActive}) => {

        return (
        <div className="bg-white rounded-lg mx-[20%] my-[1%] p-[1%]">
          <button className="button h-[auto] w-[auto]" onClick={onClick}> {isActive ? 'Game OFF' : 'Game ON'}</button>
          <p className="text-[calc(0.8vw+0.5vh)]">{isActive ? 'The site game is inactive' : 'The site game is active. Press here to override and see all content.'}</p>
        </div>
      )
}

 export default OverrideButton