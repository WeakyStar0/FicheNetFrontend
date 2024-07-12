import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/register', {
        nome,
        email,
        senha,
        tipo
      });
      alert('Usuário registrado com sucesso!');
      setNome('');
      setEmail('');
      setSenha('');
      setTipo('');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error.message);
      alert('Erro ao registrar usuário. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div>
      <h2>Registrar Usuário</h2>
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
        <input
          type="text"
          placeholder="Tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        />
        <br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
