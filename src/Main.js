import React, { useState, useEffect} from 'react';
import StartScreen from './StartScreen';
import Gallery from './Gallery/Gallery';


const Main = ({ username, onLogout }) => {
  const [start, setStart] = useState(false);

  const handleClick = () =>{
    setTimeout(() => {
      setStart(true);
    }, 2000);
  }

  return (
    <div className="main-container" onClick={handleClick}>
      {start ? (
        <Gallery></Gallery>
      ) : (
        <StartScreen></StartScreen>
      )}
    </div>
  );
};

export default Main;