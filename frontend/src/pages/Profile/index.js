import React, { useState ,useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

// api
import api from '../../services/api';

import './styles.css';

// import image
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongID = localStorage.getItem('ongID');
  const ongName = localStorage.getItem('ongName');


  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongID
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongID]);

  async function handleDeleteIncident(id) {
    try {
      api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongID,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  return (
  <div className="profile-container">
    <header>
      <img src={logoImg} alt="Be The Hero" />
      <span>Bem vindo, {ongName}</span>
      <Link className="button" to="/incidents/new" >
        Cadastrar novo caso
      </Link>
      <button type="button">
        <FiPower size={18} color="#E02041"/>
      </button>
    </header>
    <h1>Casos cadastrados</h1>
    <ul>
      {incidents.map(incident => (
        <li key={incident.id}>
        <strong>CASO:</strong>
        <p>{incident.title}</p>

        <strong>DESCRIÇÃO:</strong>
        <p>{incident.description}</p>

        <strong>VALOR:</strong>
        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

        <button 
          type="button"
          onClick={() => handleDeleteIncident(incident.id)}
        >
          <FiTrash2 size={20} color="#A8A8B3" />
        </button>
      </li>
      ))}
    </ul>
  </div>
  )
}