import time, requests
from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')

EXCHANGE = {"cex": "Cex.io", "bitfinex": "Bitfinex"}

class recommended:
    _ask_btc = {} # can't initialize with default values as it messes with the recommendation calculation
    _ask_eth = {}
    _bid_btc = {}
    _bid_eth = {}

    def get_buy_btc(self):
        return EXCHANGE[min(self._ask_btc, key=self._ask_btc.get)] #return exchange of highest last ask
    
    def get_buy_eth(self):
        return EXCHANGE[min(self._ask_eth, key=self._ask_eth.get)]

    def get_sell_btc(self):
        return EXCHANGE[max(self._bid_btc, key=self._bid_btc.get)]
    
    def get_sell_eth(self):
        return EXCHANGE[max(self._bid_eth, key=self._bid_eth.get)]
    
    def set_buy_btc(self, ask, exchange):
        self._ask_btc[exchange] = ask
    
    def set_buy_eth(self, ask, exchange):
        self._ask_eth[exchange] = ask
    
    def set_sell_btc(self, bid, exchange):
        self._bid_btc[exchange] = bid
    
    def set_sell_eth(self, bid, exchange):
        self._bid_eth[exchange] = bid

rec = recommended()

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/cex')
def get_current_cex():
    btc_url = "https://cex.io/api/ticker/BTC/USD"
    eth_url = "https://cex.io/api/ticker/ETH/USD"

    btc_data = requests.get(url = btc_url).json()
    rec.set_buy_btc(btc_data['ask'], "cex")
    rec.set_sell_btc(btc_data['bid'], "cex")

    eth_data = requests.get(url = eth_url).json()
    rec.set_buy_eth(eth_data['ask'], "cex")
    rec.set_sell_eth(eth_data['bid'], "cex")

    return {'btc_bid': btc_data['bid'], 'btc_ask': btc_data['ask'],
            'eth_bid': eth_data['bid'], 'eth_ask': eth_data['ask']}

@app.route('/api/bitfinex')
def get_current_bitfinex():
    url = "https://api-pub.bitfinex.com/v2/tickers"

    data = requests.get(url = url, params={"symbols":'tBTCUSD,tETHUSD'}).json()

    rec.set_buy_btc(data[0][3], "bitfinex")
    rec.set_sell_btc(data[0][1], "bitfinex")

    rec.set_buy_eth(data[1][3], "bitfinex")
    rec.set_sell_eth(data[1][1], "bitfinex")

    return {'btc_bid': data[0][1], 'btc_ask': data[0][3],
            'eth_bid': data[1][1], 'eth_ask': data[1][3]}

@app.route('/api/rec')
def get_recommendations():
    return {'rec_buy_btc': rec.get_buy_btc(), 'rec_sell_btc': rec.get_sell_btc(),
            'rec_buy_eth': rec.get_buy_eth(), 'rec_sell_eth': rec.get_sell_eth()}