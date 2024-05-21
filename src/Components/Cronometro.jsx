import React, { useState, useEffect } from 'react';
import ampulheta from '../assets/ampulheta.mp4';
import "../Components/Cronometro.css"

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [iniciado, setIniciado] = useState(false);

  useEffect(() => {
    let intervalo;
    if (iniciado) {
      intervalo = setInterval(() => {
        setSegundos((seg) => seg + 1);
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [iniciado]);

  useEffect(() => {
    if (segundos === 60) {
      setSegundos(0);
      setMinutos((min) => min + 1);
    }
  }, [segundos]);

  useEffect(() => {
    if (minutos === 60) {
      setMinutos(0);
      setHoras((hora) => hora + 1);
    }
  }, [minutos]);

  const iniciarCronometro = () => {
    setIniciado(true);
  };

  const pausarCronometro = () => {
    setIniciado(false);
  };

  const zerarCronometro = () => {
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setIniciado(false);
  };

  return (
    <>
    <h2>Cronômetro</h2>
    <div className='cards'>
      
      <div className='card-left'>
        
        <span>{horas < 10 ? `0${horas}` : horas}:</span> 
        <span>{minutos < 10 ? `0${minutos}` : minutos}:</span> 
        <span>{segundos < 10 ? `0${segundos}` : segundos}</span>
      </div>  
      <div className='card-right'>
        <video autoPlay muted loop className='video' >
          <source  src={ampulheta} type='video/mp4' />
        </video>
      </div>
    </div>

     <div className='buttons'>
     {!iniciado ? (
       <button onClick={iniciarCronometro}>Iniciar</button>
     ) : (
       <button onClick={pausarCronometro}>Pausar</button>
     )}
     <button onClick={zerarCronometro}>Zerar</button>
   </div>
  </>
  );
}

export default Cronometro;
