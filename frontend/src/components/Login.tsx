import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router-dom';


export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const BASE_URL = "http://localhost:5000/users/login"
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const login = {
      email,
      password
    }

    await axios.post(BASE_URL, login)
      .then((response) => {
        setUser(response.data);
        const token = user.token;
        localStorage.setItem('token', token);
        navigate('/home')
      })
      .catch(() => setError("Usuário ou senha inválidos"));
  }

  return (
    <div className="login_container">
      <div className="login_header">
        <h1>LOGIN</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="login_form">
          <label htmlFor="Email">E-mail:</label>
          <input
            type="email"
            name="email"
            placeholder='Digite seu e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder='Digite a sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p>{error}</p>}
          <div className="login_actions">
            <button type='submit'>ENTRAR</button>
          </div>
        </form>
      </div>
    </div>

  )
}
