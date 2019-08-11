import React, { useState } from 'react';

import './Button.scss';

export interface ButtonProps{
  label: string;
  handleClick: any;
  textColor?: string;
  backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({label, handleClick, textColor, backgroundColor}) => {
  const [clicked, setClicked] = useState(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handleOnClick = (e: any) => {
    const posX = (e.pageX - e.target.offsetLeft) - 50;
    const posY = (e.pageY / e.target.offsetHeight) - 25;

    setClicked(true);
    setPosX(posX);
    setPosY(posY);
    setTimeout(() => {
      setClicked(false);
    }, 600);
    handleClick(e);
  }

  return (
    <button type="button"
      className="button"
      value={label}
      onClick={(e) => handleOnClick(e)}
      style={
        {
          color: `${textColor}`,
          backgroundColor: `${backgroundColor}`
        }
      }>
      {label}
      { clicked
      && <span className="button--ripple" style={{ top: `${posY}px`, left: `${posX}px` }} /> }
    </button>
  );
}

export default Button;