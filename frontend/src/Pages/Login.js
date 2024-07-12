import React, { useState } from 'react';
import axios from 'axios';
import '../login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        email,
        senha
      });

      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      alert('Login realizado com sucesso!');
      window.location.href = '/';
    } catch (error) {
      console.error('Erro ao realizar login:', error.message);
      alert('Erro ao realizar login. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div>
      <div style={{ height: '200px', paddingTop: '56px' }}></div>
      <div className='loginpage'>
        <div className='login-container'>
          <img src="https://imgur.com/oJTR0sR.png" alt="Logo" class="logo-image" />
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input id="password"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <br />
            <button className='buttonlogin' type="submit">Login</button>
          </form>
        </div>
      </div>
      <br></br>
    </div>
  );
};

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('usuario'); // Valor padrão para tipo

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/register', {
        nome,
        email,
        senha,
        tipo
      });
      alert('Usuário registado com sucesso!');
      setNome('');
      setEmail('');
      setSenha('');
      setTipo('usuario'); // Reset para valor padrão
    } catch (error) {
      console.error('Erro ao registar usuário:', error.message);
      alert('Erro ao registar usuário. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div>
      <div style={{ height: '200px', paddingTop: '56px' }}></div>
      <div className='loginpage'>
        <div className='login-container'>
          <img src="https://imgur.com/oJTR0sR.png" alt="Logo" class="logo-image" />
          <div className='registerbox' id="register">
            <h2>Registar Usuário</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <br />
              <label htmlFor="tipo">Tipo:</label>
              <select
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              >
                <option value="usuario">Usuário</option>
                <option value="admin">Admin</option>
              </select>
              <br />
              <button className='buttonlogin' type="submit">Registar</button>
            </form>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginRegisterPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {showLogin ? <Login /> : <Register />}
      <button className='btnchange' onClick={toggleForm}>
        {showLogin ? 'Registar-se' : 'Fazer Login'}
      </button>
    </div>
  );
};

export default LoginRegisterPage;
