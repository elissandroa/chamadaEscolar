import { FormEvent, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const login = {
      email,
      password
    }

     await api.post("/users/login",login)
      .then((response) => {
        setUser(response.data);
        const token = response.data.token;
        localStorage.setItem('token', token)
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
