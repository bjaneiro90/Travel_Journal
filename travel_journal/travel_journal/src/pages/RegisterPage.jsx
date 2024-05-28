import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Botao } from "../components/botao";

export function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmationInfo, setConfirmationInfo] = useState('');
  const [token, setToken] = useState('');

  

  useEffect(() => {
    setEmailError('')
    const checkEmailMatch = async () => {
      if (email) {
        console.log(email);
        try {
          const response = await fetch("http://localhost:8001/perfils");
          const data = await response.json();
          const profile = data.find(profile => profile.email === email);
          if (profile) {
            setEmailError('O email inserido já está registrado.');
          } else {
           
          }
        } catch (error) {
          console.error("Erro ao verificar email:", error);
          setEmailError('Erro ao verificar email.');
        }
      }
    };
    checkEmailMatch();
  }, [email]);

  useEffect(() => {
    setPasswordError('')
    if (password.length > 0 && password.length <= 5) {
      setPasswordError('A senha deve ter mais do que 5 caracteres.');
    } else {
      setPasswordError('');
    }
  }, [password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setNameError('');
    setEmailError('');
    setConfirmationInfo('');
    setError('');
    try {
      if (emailError) {
        return;
      }
      const generateRandomNumber = () => {

        //Math.random():
        //Esta função retorna um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo), ou seja, no intervalo [0, 1). Finalmente, Math.floor arredonda o valor para baixo até o inteiro mais próximo. Como resultado, temos um número inteiro dentro do intervalo [10000, 99999].

        return Math.floor(100000 + Math.random() * 900000);
      };
      const newToken = generateRandomNumber().toString();
      console.log(newToken);
      const newUser = { name, email, password, token: newToken };
      const postResponse = await fetch("http://localhost:8001/perfils", {
        method: 'POST',

        // Numa petição HTTP, os headers são metadados que fornecem info adicional. especifica o tipo de conteúdo que é enviado, autenticação. Content type indica o tipo de conteúdo, que neste caso estamos a informar que é um JSON
        headers: {
          'Content-Type': 'application/json'
        },

        // contém os dados que estamos a enviar ao servidor, neste caso que queremos adicionar. o JSON.stringify converte o objecto javascript em uma string, requisito necessário pra uma requisição HTTP
        body: JSON.stringify(newUser)
      });
      if (postResponse.ok) {
        setConfirmationInfo('Registro bem-sucedido!');
        setName('');
        setEmail('');
        setPassword('');
        setToken(newToken);
      } else {
        setError('Ocorreu um erro ao registrar. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error("Erro ao realizar o registro:", error);
      setError('Ocorreu um erro ao realizar o registro. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <main className="lgin-main">
      <section className="lgin-section">
        <form className="lgin-form" onSubmit={onSubmit}>
          <div className="lgin-h2">
            <h2>Registo</h2>
          </div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {nameError && <p className="lgin-error">{nameError}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="lgin-error">{emailError}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <p className="lgin-error">{passwordError}</p>}
          </div>
          <Botao type="submit" clase="lgin-button">Registrar</Botao>
          {confirmationInfo ? <p className="lgin-confirm">{confirmationInfo}</p> : null}
          <p>Já tem uma conta? <Link to="/login">Login</Link></p>
        </form>
      </section>
    </main>
  );
}
