import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [cex, setCex] = useState({btc_bid: 0, btc_ask: 0, eth_bid: 0, eth_ask: 0});

  const [bitfinex, setBitfinex] = useState({btc_bid: 0, btc_ask: 0, eth_bid: 0, eth_ask: 0});

  useEffect(() => {
    fetch('/cex').then(res => res.json()).then(data => {
      setCex({btc_bid: data.btc_bid, btc_ask: data.btc_ask, eth_bid: data.eth_bid, eth_ask: data.eth_ask});
    });

    fetch('/bitfinex').then(res => res.json()).then(data => {
      setBitfinex({btc_bid: data.btc_bid, btc_ask: data.btc_ask, eth_bid: data.eth_bid, eth_ask: data.eth_ask});
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://github.com/JFChoe/my-crypt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code can be found here.
        </a>

        <p>The last bid for BTC from CEX.io is ${cex.btc_bid}. The last bid for BTC from Bitfinex is ${bitfinex.btc_bid}. </p>
        <p>The last ask for BTC from CEX.io is ${cex.btc_ask}. The last ask for BTC from Bitfinex is ${bitfinex.btc_ask}.</p>
        <p>The last bid for ETH from CEX.io is ${cex.eth_bid}. The last bid for ETH from Bitfinex is ${bitfinex.eth_bid}.</p>
        <p>The last ask for ETH from CEX.io is ${cex.eth_ask}. The last ask for ETH from Bitfinex is ${bitfinex.eth_ask}.</p>
      </header>
    </div>
  );
}

export default App;
