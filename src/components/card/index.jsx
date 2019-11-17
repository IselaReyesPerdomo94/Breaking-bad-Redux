import React, {useState} from 'react';
import {GiPerspectiveDiceSixFacesRandom, GiChemicalArrow } from 'react-icons/gi';
import {FaRegStar, FaStar, FaHeart, FaRegHeart} from 'react-icons/fa';
import './style.css';

const Card = ({img, name, occupation, nickname, status, portrayed, quote}) => {
    const [show, setShow] = useState(false)
   
    const handleClickShowInfo = () => setShow(!show)

    const cardClass = `character-info ${show ? "show-more" : "show-less"}`;
    const arrow = `arrow ${show ? "up" : "down"}`;
    return(
        <article className="card">
            <figure>
                <img src={img} alt={img}/>
            </figure>
            <div className={cardClass}>
                <header>
                    <h3>{name}</h3>
                </header>
                <span className={arrow}><GiChemicalArrow/></span>
                <p>Occupations: <span>{occupation}</span></p>
                <p>Nickname: <span>{nickname}</span></p>
                <p>Status: <span>{status}</span></p>
                <p>Portrayed by: <span>{portrayed}</span></p>
                <blockquote cite="" className="quote">
                    <p>{quote}</p>
                    <GiPerspectiveDiceSixFacesRandom className="random"/>
                </blockquote>
                <span className="star">Character</span>
                <span className="heart">Quote</span>
            </div>
        </article>
    )
}

export default Card;