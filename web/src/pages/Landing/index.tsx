import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../Assets/images/logo.svg';
import landingImg from '../../Assets/images/landing.svg';
import studyIcon from '../../Assets/images/icons/study.svg';
import giveClassesIcon from '../../Assets/images/icons/give-classes.svg';
import purpleHeart from '../../Assets/images/icons/purple-heart.svg';
import api from '../../services/api';

import './styles.css';

function Landing(){




    const [totalConnections, setTotalConnections] = useState(0);

     useEffect(()=>{
        api.get('/connections').then(response =>{
            setTotalConnections(response.data.total)
            console.log(response)
        })
    },[])


    return(
        <div id="page-landing">
            <div id="page-landing-content" className='container'>
                <div id="logo-container">
                    <img src={logoImg} alt="proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-img"/>
                <div className="buttons-container">
                    <Link to="/study"  className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes"  className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Dar Aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeart} alt="Coração " ></img>
                </span>
            </div>
        </div>
    );
}

export  default Landing;