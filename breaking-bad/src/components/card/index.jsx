import React from 'react';
import {GiPerspectiveDiceSixFacesRandom, FaRegStar, FaStar} from 'react-icons/fa';
import './style.css';

const Card = () => {
    return(
        <article>
            <figure>
                <img/>
            </figure>
            <header>
                <h3></h3>
            </header>
            <p>Occupation:</p>
            <p>Nickname:</p>
            <p>Status:</p>
            <p>Portrayed by:</p>
            <blockquote cite="">
                <p></p>
                <GiPerspectiveDiceSixFacesRandom/>
            </blockquote>
            <span></span>
        </article>
    )
}

export default Card;