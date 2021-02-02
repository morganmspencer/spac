import fetch from 'node-fetch'
import { spacs } from 'src/services/spacs'

export const fmpStock = async ({ symbol }) => {
  const response = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${process.env.FMP_API}`
  )

  const json = await response.json()

  console.log(json)

  var ipoPrice = null

  if (json?.length && json[0]?.ipoDate) {

    const ipos = await fetch(
      `https://financialmodelingprep.com/api/v3/ipo_calendar?from=${json[0].ipoDate}&to=${json[0].ipoDate}&apikey=${process.env.FMP_API}`
    )

    const ipoJson = await ipos.json()

    var result = ipoJson.filter((obj) => {
      return obj.symbol === json[0].symbol
    })

    if (result?.length) {
      ipoPrice = result[0].priceRange
    }

  }

  return {
    symbol: json[0].symbol,
    price: json[0].price,
    companyName: json[0].companyName,
    ceo: json[0].ceo,
    ipoDate: json[0].ipoDate ? json[0].ipoDate : null,
    ipoPrice: ipoPrice,
    stock: json
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
    `https://financialmodelingprep.com/api/v3/stock_news?tickers=${finalSymbols}&limit=20&apikey=${process.env.FMP_API}`
  )

  const json = await news.json()

  return json
}

export const getFmpSpacs = async() => {
  const industry = 'Shell Companies'
  const allSpacs = await fetch(
    `https://financialmodelingprep.com/api/v3/stock-screener?industry=${industry}&limit=5000&apikey=${process.env.FMP_API}`
  )

  const json = await allSpacs.json()

  return json
}
