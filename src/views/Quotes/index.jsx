import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  startFetchQuotes,
  getQuotes,
  getQuotesLoadingStatus,
} from "../../ducks/quotes";
import { Nav, Search, QuoteList } from "../../components";

import Loader from "react-loader-spinner";
import "./style.css";

/**
 * Quotes render full or filtered list of quotes.
 * @returns {*} React component.
 */
const Quotes = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const quotes = useSelector(getQuotes);
  const isLoading = useSelector(getQuotesLoadingStatus);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    dispatch(startFetchQuotes());
  }, [dispatch]);

  return (
    <main className="quotes-main">
      <header>
        <Nav />
      </header>
      <Search onChange={handleSearchChange} value={searchValue} />
      <section className="quotes-section">
        {isLoading && (
          <div className="loader">
            <Loader
              type="Puff"
              color="yellow"
              height={80}
              width={80}
              className="loader"
            />
          </div>
        )}
        <QuoteList searchValue={searchValue} quotes={quotes} />
      </section>
    </main>
  );
};

export default Quotes;
