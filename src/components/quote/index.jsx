import React from 'react';

import './style.css'

const Quote = ({author, quote}) => (
    <article className="container">
        <h3>{author}</h3>
        <p>{quote}</p>
    </article>
)

export default Quote;