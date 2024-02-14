import React, { useState, useEffect} from 'react';

function StartScreen(){
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(true);
  }

  useEffect(() => {
    if (open) {
      document.querySelector(".start-screen img").classList.add('active');
      setTimeout(() => {
        setTimeout(() => {
          document.querySelector(".start-screen img").classList.add('active2');
        }, 500);
      }, 300);
    } else {
      document.querySelector(".start-screen img").classList.remove('active');
    }
  }, [open]);

  return(
    <div className='start-screen' onClick={handleClick}>
      <img src="./picture/寶寶/拍貼.jpg"></img>
    </div>
  )
}

export default StartScreen;