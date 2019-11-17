import React, {Fragment} from 'react';

import {Quote} from '../index';

import './style.css'

const QuoteList = ({searchValue, quotes}) => {

    const searchAuthorQuote = (searchValue) => {
        return quotes.filter(quote => quote.author.toUpperCase().includes(searchValue.toUpperCase())).map(quote => <Quote
            author={quote.author}
            quote={quote.quote}
            key={quote.quote_id}
            />)
    }


    return (
        <Fragment>
            {
                quotes.length && (
                    searchValue && searchAuthorQuote(searchValue) )||
                    quotes && quotes.map(quote => <Quote
                        author={quote.author}
                        quote={quote.quote}
                        key={quote.quote_id}
                    />)
            }
        </Fragment>
    )
}

export default QuoteList;
