import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função de autenticação simulada (substitua por sua lógica real)
  const handleLogin = () => {
    // Aqui você deve verificar as credenciais e autenticar o usuário
    // Se a autenticação for bem-sucedida, defina isLoggedIn como true
    // Caso contrário, trate a autenticação como falha
    if (email === 'user@example.com' && password === 'password123') {
      setIsLoggedIn(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  // Se o usuário já estiver logado, redirecione para a página principal (App)
  if (isLoggedIn) {
    return <Redirect to="/app" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
