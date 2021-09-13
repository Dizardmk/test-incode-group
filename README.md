# React Test Task

## About application

- application connect to the locally running service
- application render price changes for some tickers in real time
- additional visual effects to highlight positive or negative changes in the
  prices
- the possibility to switch on/off tickers by user
- the possibility to specify interval time by user
- the possibility to add/remove ticker from watching group
- disable buttons depending on the operation

Used the next technologies:

- React (hooks)
- Redux
- Socket.io - to connect to the service
- used module scss

## Running the local service

1. Open a new bash shell
2. `cd server`
3. `npm install` or `yarn install`
4. `npm run start` or `yarn start`
5. You can visit [http://localhost:4000](http://localhost:4000) to check that
   the service is working correctly and inspect the data it produces.

## Run your application

1. Open a new bash shell
2. `cd client`
3. `npm install` or `yarn install`
4. `npm run start` or `yarn start`

# Price Service Usage

URL: `http://localhost:4000`

Price tickers are real-time via web-sockets.

## Example JSON Response from the Price Ticker service

```json
[
  {
    "ticker": "AAPL",
    "exchange": "NASDAQ",
    "price": 279.29,
    "change": 64.52,
    "change_percent": 0.84,
    "dividend": 0.56,
    "yield": 1.34,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
  },
  {
    "ticker": "GOOGL",
    "exchange": "NASDAQ",
    "price": 237.08,
    "change": 154.38,
    "change_percent": 0.1,
    "dividend": 0.46,
    "yield": 1.18,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
  },
  {
    "ticker": "MSFT",
    "exchange": "NASDAQ",
    "price": 261.46,
    "change": 161.45,
    "change_percent": 0.41,
    "dividend": 0.18,
    "yield": 0.98,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
  },
  {
    "ticker": "AMZN",
    "exchange": "NASDAQ",
    "price": 260.34,
    "change": 128.71,
    "change_percent": 0.6,
    "dividend": 0.07,
    "yield": 0.42,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
  },
  {
    "ticker": "FB",
    "exchange": "NASDAQ",
    "price": 266.77,
    "change": 171.92,
    "change_percent": 0.75,
    "dividend": 0.52,
    "yield": 1.31,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
  },
  {
    "ticker": "TSLA",
    "exchange": "NASDAQ",
    "price": 272.13,
    "change": 158.76,
    "change_percent": 0.1,
    "dividend": 0.96,
    "yield": 1.0,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
  }
]
```

The tickers we use:

- **AAPL** - Apple
- **GOOGL** - Alphabet
- **MSFT** - Microsoft
- **AMZN** - Amazon
- **FB** - Facebook
- **TSLA** - Tesla
