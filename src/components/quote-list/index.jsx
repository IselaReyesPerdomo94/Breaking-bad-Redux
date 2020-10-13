import React, { Fragment } from "react";

import { Quote, EmptyMessage } from "../index";

import "./style.css";

/**
 * Quote renders a quote from a character.
 * @param   {String}    searchValue  ValueTyped in search bar.
 * @param   {Array}    quotes  Quote list of the characters.
 * @returns {*} React component.
 */
const QuoteList = ({ searchValue, quotes }) => {
  const areQuotesToRender = quotes && quotes.length > 0;
  const showFilteredList = areQuotesToRender && searchValue;
  const showFullList = areQuotesToRender && !searchValue;

  const searchAuthorQuote = (searchValue) => {
    const result = quotes.filter((quote) =>
      quote.author.toUpperCase().includes(searchValue.toUpperCase())
    );
    if(result.length === 0) {
      return <EmptyMessage message='We could not find quotes from that character'/>
    }
    return result.map((quote) => (
        <Quote author={quote.author} quote={quote.quote} key={quote.quote_id} />
      ));
  };

  return (
    <Fragment>
      {showFilteredList && searchAuthorQuote(searchValue)}
      {showFullList &&
        quotes.map((quote) => (
          <Quote
            author={quote.author}
            quote={quote.quote}
            key={quote.quote_id}
          />
        ))}
    </Fragment>
  );
};

export default QuoteList;
