import React, { useState } from "react";

interface OverrideButtonProps {
    imageUrl: string;
    isActive: boolean;
    code: string;
    font: string;
}

const CodeEntry: React.FC<OverrideButtonProps> = ({imageUrl, isActive, code, font}) => {
        const [inputValue, setInputValue] = useState('');
        const [disabled, setDisabled] = useState(false);

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value.toUpperCase())
            if(code == e.target.value.toUpperCase()){
                setDisabled(true)
            }
        }
        return (
          <div className={`code-entry-container ${imageUrl}`}>
            <label htmlFor="my-input"></label>
            <input className={`codeEntry ${font}`}
              type="text"
              id="my-input"
              value={inputValue}
              onChange={handleInputChange}
              disabled={disabled || !isActive}
              maxLength={7}
            />
          </div>
      )
}

 export default CodeEntry