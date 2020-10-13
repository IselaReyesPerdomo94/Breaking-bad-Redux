import React from "react";

import "./style.css";

/**
 * Quote renders a quote from a character.
 * @param   {String}	author  Name of the character.
 * @param   {String}	quote   Quote of the character.
 * @returns {*} React component.
 */
const Quote = ({ author, quote }) => (
  <article className="container">
    <h3>{author}</h3>
    <p>{quote}</p>
  </article>
);

export default Quote;
