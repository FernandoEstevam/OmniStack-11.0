import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

// import css
import './styles.css';
//api
import api from '../../services/api';
// import image
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {

  const [id, setID] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await  api.post('sessions', { id });

      localStorage.setItem('ongID', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');

    } catch (error) {
      alert('Falaha no login, tente novamente.');
    }
  }

  return(
  <div className="logon-container">
    <section className="form">
      <img src={logoImg} alt="Be The Hero"/>

      <form onSubmit={handleLogin}>
        <h1>Faça seu logo</h1>

        <input 
          placeholder="Sua ID" 
          value={id}
          onChange={e => setID(e.target.value)}
        />
        <button type="submit" className="button">Entar</button>

        <Link className="back-link" to="/register">
          <FiLogIn size={16} color='#E02041' />
          Não tem cadastro
        </Link>
      </form>
    </section>
    
    <img src={heroesImg} alt="Heroes" />
  </div>
  )
}