import React, { useState, useEffect } from "react";
import "./App.css";

const EXCHANGE_HREF_BTC = {
  "Cex.io": "https://cex.io/btc-usd",
  Bitfinex: "https://www.bitfinex.com/t/BTC:USD",
};

const EXCHANGE_HREF_ETH = {
  "Cex.io": "https://cex.io/eth-usd",
  Bitfinex: "https://www.bitfinex.com/t/ETH:USD",
};

function App() {
  const [cex, setCex] = useState({
    btc_bid: 0,
    btc_ask: 0,
    eth_bid: 0,
    eth_ask: 0,
  });
  const [bitfinex, setBitfinex] = useState({
    btc_bid: 0,
    btc_ask: 0,
    eth_bid: 0,
    eth_ask: 0,
  });
  const [rec, setRec] = useState({
    buy_btc: "",
    sell_btc: "",
    buy_eth: "",
    sell_eth: "",
  });

  function refreshPage() {
    window.location.reload(); 
  }

  useEffect(() => {
    fetch("/api/cex")
      .then((res) => res.json())
      .then((data) => {
        setCex({
          btc_bid: data.btc_bid,
          btc_ask: data.btc_ask,
          eth_bid: data.eth_bid,
          eth_ask: data.eth_ask,
        });
      });

    fetch("/api/bitfinex")
      .then((res) => res.json())
      .then((data) => {
        setBitfinex({
          btc_bid: data.btc_bid,
          btc_ask: data.btc_ask,
          eth_bid: data.eth_bid,
          eth_ask: data.eth_ask,
        });
      });
  }, []);

  useEffect(() => {
    fetch("/api/rec")
      .then((res) => res.json())
      .then((data) => {
        setRec({
          buy_btc: data.rec_buy_btc,
          sell_btc: data.rec_sell_btc,
          buy_eth: data.rec_buy_eth,
          sell_eth: data.rec_sell_eth,
        });
      });
  }, [cex, bitfinex]);

  return (
    <div className="App">
      <header className="App-header">
        <strong style={{ fontSize: 80, paddingBottom: "10px" }}>
          Welcome to crypt-recommender!
        </strong>
        <a
          className="App-link"
          href="https://github.com/JFChoe/my-crypt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code can be found here.
        </a>
        <header className="Coin-header">
          <p>
            We recommend to buy/sell crypto-currency from the exchanges below
          </p>
        </header>
        <table style={{ width: "30%" }}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Buy</th>
              <th>Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bitcoin (BTC)</td>
              <td>
                <a
                  className="App-link"
                  href={EXCHANGE_HREF_BTC[rec.buy_btc]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rec.buy_btc}
                </a>
              </td>
              <td>
                <a
                  className="App-link"
                  href={EXCHANGE_HREF_BTC[rec.sell_btc]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rec.sell_btc}
                </a>
              </td>
            </tr>
            <tr>
              <td>Ethereum (ETH)</td>
              <td>
                <a
                  className="App-link"
                  href={EXCHANGE_HREF_ETH[rec.buy_eth]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rec.buy_eth}
                </a>
              </td>
              <td>
                <a
                  className="App-link"
                  href={EXCHANGE_HREF_ETH[rec.sell_eth]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rec.sell_eth}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
      <hr />
      <table align="center">
        <tr>
          <td>
            <table style={{ width: "50%" }}>
              <caption style={{ color: "ActiveCaption" }}>
                Most recent bid offer price
              </caption>
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Cex.io</th>
                  <th>Bitfinex</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bitcoin (BTC)</td>
                  <td>${cex.btc_bid}</td>
                  <td>${bitfinex.btc_bid}</td>
                </tr>
                <tr>
                  <td>Ethereum (ETH)</td>
                  <td>${cex.eth_bid}</td>
                  <td>${bitfinex.eth_bid}</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table style={{ width: "50%" }}>
              <caption style={{ color: "ActiveCaption" }}>
                Most recent ask offer price
              </caption>
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Cex.io</th>
                  <th>Bitfinex</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bitcoin (BTC)</td>
                  <td>${cex.btc_ask}</td>
                  <td>${bitfinex.btc_ask}</td>
                </tr>
                <tr>
                  <td>Ethereum (ETH)</td>
                  <td>${cex.eth_ask}</td>
                  <td>${bitfinex.eth_ask}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
      <button className="button" onClick={ refreshPage }> <span>Reload Market Prices</span> </button> 
    </div>
  );
}

export default App;
