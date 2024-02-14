import React, { useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
import Main from './Main';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    // 檢查 localStorage 中是否有登入標記
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    // 初始時先不登入
    setLoggedIn(false);
    setLoggedIn(isLoggedIn);
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