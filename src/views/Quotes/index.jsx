import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {startFetchQuotes} from '../../ducks/quotes';
import {Nav, Search, QuoteList} from '../../components';

import Loader from 'react-loader-spinner';
import './style.css';

const Quotes = ({quotes, startFetchQuotes, isLoading}) => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(()=> {
        startFetchQuotes()
    }, [])
    return (
        <main className="quotes-main">
            <header>
                <Nav/>
            </header>
            <Search 
                onChange={handleSearchChange}
                value={searchValue}
                />
            <section className="quotes-section">
            { isLoading && <div className="loader">
                <Loader 
                    type="Puff" 
                    color="yellow" 
                    height={80} 
                    width={80} 
                    className="loader"/>
                </div>
            }
            <QuoteList
                searchValue={searchValue}
                quotes={quotes}
            />
            </section>
        </main>
    )
}

const mapStateToProps = ({quotes}) => {
    return {
        quotes: quotes.quotes,
        isLoading: quotes.loading
    }
}

const mapDispatchToProps = {
    startFetchQuotes
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quotes);