import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

// import css
import './styles.css';
// import image
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  return(
  <div className="logon-container">
    <section className="form">
      <img src={logoImg} alt="Be The Hero"/>

      <form >
        <h1>Faça seu logo</h1>

        <input placeholder="Sua ID" />
        <button type="submit" className="button">Entar</button>

        <Link to="/register">
          <FiLogIn size={16} color='#E02041' />
          Não tem cadastro
        </Link>
      </form>
    </section>
    
    <img src={heroesImg} alt="Heroes" />
  </div>
  )
}