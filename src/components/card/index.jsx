import React, { useState } from "react";
import { GiChemicalArrow } from "react-icons/gi";
import "./style.css";

const Card = ({
  img,
  name,
  occupation,
  nickname,
  status,
  portrayed,
  seasons,
}) => {
  const [show, setShow] = useState(false);

  const handleClickShowInfo = () => setShow(!show);

  const cardClass = `character-info ${show ? "show-more" : "show-less"}`;
  const arrow = `arrow ${show ? "s" : "down"}`;
  const characterInfo = `character-details ${show ? "" : "hide"}`;
  return (
    <article className="card">
      <figure>
        <img src={img} alt={img} />
      </figure>
      <div className={cardClass}>
        <header>
          <h3>{name}</h3>
          <span className={arrow} onClick={handleClickShowInfo}>
            <GiChemicalArrow />
          </span>
        </header>
        <div className={characterInfo}>
          <p>
            Occupations: <span>{occupation}</span>
          </p>
          <p>
            Nickname: <span>{nickname}</span>
          </p>
          <p>
            Status: <span>{status}</span>
          </p>
          <p>
            Portrayed by: <span>{portrayed}</span>
          </p>
          <p>
            Seasons: <span>{seasons}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
