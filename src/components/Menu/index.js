import React from 'react';
import { Link } from 'react-router-dom';
import GameflixLogo from '../../assets/img/gameflixlogo.png';
import ButtonLink from '../../components/ButtonLink/index';
import './Menu.css';

function Menu(){
    return(
        <>
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={GameflixLogo} alt=""/>
            </Link>
           <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video" >
                Novo vídeo   
            </ButtonLink>
              
        </nav>
        </>
    );
}

export default Menu;