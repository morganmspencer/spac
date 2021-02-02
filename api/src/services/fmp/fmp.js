import fetch from 'node-fetch'
import { spacs } from 'src/services/spacs'

export const fmpStock = async ({ symbol }) => {
  const response = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${process.env.FMP_API}`
  )

  const json = await response.json()

  return {
    symbol: json[0].symbol,
    price: json[0].price,
    companyName: json[0].companyName,
    ceo: json[0].ceo,
  }
}

export const spacNews = async ({ symbol, limit = 10 }) => {
  const response = await fetch(
    `https://financialmodelingprep.com/api/v3/stock_news?tickers=${symbol}&limit=${limit}&apikey=${process.env.FMP_API}`
  )

  const json = await response.json()

  return json
}

export const allSpacNews = async () => {
  const response = await spacs('symbol')

  var symbols = ''

  response.forEach((symbol) => {
    symbols += symbol.symbol + ','
  })

  const finalSymbols = symbols.slice(0, -1)

  const news = await fetch(
    `https://financialmodelingprep.com/api/v3/stock_news?tickers=${finalSymbols}&limit=25&apikey=${process.env.FMP_API}`
  )

  const json = await news.json()

  return json
}
