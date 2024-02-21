import React, { useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
import Main from './Main';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    // 初始時先不登入
    setLoggedIn(false);
    // 檢查 localStorage 中是否有登入標記
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setLoggedIn(isLoggedIn);

    // 設定最後一次活動時間戳到 localStorage
    const setLastActivity = () => {
      localStorage.setItem('lastActivity', Date.now().toString());
    };

    // 處理瀏覽器關閉事件
    const handleBeforeUnload = (event) => {
      setLastActivity();
    };

    // 綁定事件
    window.addEventListener('beforeunload', handleBeforeUnload);

    // 初始化最後一次活動時間戳
    setLastActivity();

    // 定時檢查時間差，如果超過 5 分鐘，執行登出操作
    const checkLogout = () => {
      const lastActivity = localStorage.getItem('lastActivity');
      if (lastActivity) {
        const currentTime = Date.now();
        const timeDifference = currentTime - parseInt(lastActivity, 10);
        const fiveMinutes = 5 * 60 * 1000; // 5 分鐘的毫秒數

        if (timeDifference > fiveMinutes) {
          // 執行登出操作，例如觸發登出函數
          console.log('Auto logout after 5 minutes of inactivity');
        }
      }
    };

    // 設定定時器，每分鐘檢查一次
    const intervalId = setInterval(checkLogout, 60 * 1000);

    // 在 component 卸載時，清理事件和定時器
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(intervalId);
    };
  }, []);

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
    setTimeout(() => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }, 0);

    // 在 localStorage 中設定登入標記
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');

    // 在 localStorage 中刪除登入標記
    localStorage.removeItem('isLoggedIn');
  };

  useEffect(() => {
    if (showSuccessMessage) {
      document.querySelector(".app").classList.add('show-success-message');
    } else {
      document.querySelector(".app").classList.remove('show-success-message');
    }
  }, [showSuccessMessage]);

  return (
    <>
      <div className="app">
        {loggedIn ? (
          <Main username={username} onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
      {showSuccessMessage ? (
        <h2 className='login-message'>Welcome, {username}!</h2>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;