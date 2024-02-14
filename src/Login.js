import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 加入驗證邏輯
    let user = ['Hua','Han'];
    let passkey = '0829';
    let test = 0;
    for(let i=0; i<=user.length; i++){
      if (username === user[i] && password === passkey){
        test = 1;
      }
    }
    if(test === 1){
      // 呼叫父組件傳遞的 onLogin 函數，並傳遞使用者名稱
      onLogin(username);
    }
    if(test === 0){
      alert("username or password error.");
    }
    test = 0;//reset
  };

  return (
    <div className="login-screen">
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;