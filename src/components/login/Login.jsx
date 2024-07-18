import React, { useState } from 'react';
import './login.css';
import { signIn } from '../../lib/firebase'; // Firebase signIn fonksiyonunu import edin

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password); // Firebase signInWithEmailAndPassword kullanarak giriş yap
    } catch (error) {
      setError(error.message); // Hata olursa kullanıcıya göstermek için hatayı state'e kaydet
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email" // Email türü için type="email" kullanın
          placeholder="E-mail'inizi girin."
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre girin."
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Giriş Yap</button>
        {error && <p className="error">{error}</p>} {/* Hata varsa kullanıcıya göster */}
      </form>
    </div>
  );
};

export default Login;













/*import React from 'react';
import "./login.css";

const Login = () => {
  return (
     <div className='login'>
      <form>
        <input type="text" placeholder="E-mail'inizi girin." name="email" />
        <input type="password" placeholder="Şifre girin." name="password"/>
        <button>Giriş Yap</button>
      </form>
     </div>
  );
};

export default Login;*/