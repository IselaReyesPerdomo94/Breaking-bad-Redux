import React from 'react';
import {GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import {FaRegStar, FaStar, FaHeart, FaRegHeart} from 'react-icons/fa';
import './style.css';

const Card = (props) => {
    const {img, name, occupation, nickname, status, portrayed, quote} = props;
    return(
        <article className="card">
            <figure>
                <img src={img} alt={img}/>
            </figure>
            <header>
                <h3>{name}</h3>
            </header>
            <p>Occupation: <span>{occupation}</span></p>
            <p>Nickname: <span>{nickname}</span></p>
            <p>Status: <span>{status}</span></p>
            <p>Portrayed by: <span>{portrayed}</span></p>
            <blockquote cite="" className="quote">
                <p>{quote}</p>
                <GiPerspectiveDiceSixFacesRandom className="random"/>
            </blockquote>
            <span className="star">Character</span>
            <span className="heart">Quote</span>
        </article>
    )
}

export default Card;