import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {startFetchQuotes} from '../../ducks/quotes';
import {Nav, Quote} from '../../components';

import Loader from 'react-loader-spinner';
import './style.css';

const Quotes = ({quotes, startFetchQuotes, isLoading}) => {
    useEffect(()=> {
        startFetchQuotes()
    }, [])
    return (
        <main className="quotes-main">
            <header>
                <Nav/>
            </header>
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
            {
                quotes && quotes.map(quote => <Quote
                    author={quote.author}
                    quote={quote.quote}
                    key={quote.quote_id}
                />)
            }


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