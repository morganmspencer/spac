import fetch from 'node-fetch'
import { db } from 'src/lib/db'
import { spacs } from 'src/services/spacs'

function fmpApi(request) {
  const keySep = request.includes('?') ? '&' : '?'
  return (
    'https://financialmodelingprep.com/api/v3' +
    request +
    `${keySep}apikey=${process.env.FMP_API}`
  )
}

export const fmpStock = async ({ symbol }) => {
  const response = await fetch(
    fmpApi(`/profile/${symbol}`)
  )

  const json = await response.json()

  console.log(json)

  var ipoPrice = null

  if (json?.length && json[0]?.ipoDate) {
    const ipos = await fetch(
      fmpApi(`/ipo_calendar?from=${json[0].ipoDate}&to=${json[0].ipoDate}`)
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
    stock: json,
  }
}

export const spacNews = async ({ symbol, limit = 10 }) => {
  const response = await fetch(
    fmpApi(`/stock_news?tickers=${symbol}&limit=${limit}`)
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
    fmpApi(`/stock_news?tickers=${finalSymbols}&limit=20`)
  )

  const json = await news.json()

  return json
}

export const getFmpSpacs = async () => {
  var dbSpacs = [],
    fmpSpacs = []

  // Get SPACS from FMP
  const industry = 'Shell Companies'
  const allSpacs = await fetch(
    fmpApi(`/stock-screener?industry=${industry}&limit=5000`)
  )
  const json = await allSpacs.json()

  if (json) {
    json.forEach((spac) => {
      if (spac?.symbol) {
        fmpSpacs.push(spac.symbol)
      }
    })
  }

  // Get SPACS in DB
  const ourSpacs = await spacs()

  if (ourSpacs?.length) {
    ourSpacs.forEach((spac) => {
      if (spac?.ipoSymbol) {
        dbSpacs.push(spac.ipoSymbol)
      }
    })
  }

  // Filter out ones already in DB
  var spacsToAdd = fmpSpacs.filter((val) => !dbSpacs.includes(val))

  if (spacsToAdd.length) {
    var symbols = ''

    spacsToAdd.forEach((stock) => {
      symbols += stock + ','
    })

    const finalSymbols = symbols.slice(0, -1)

    const allSpacs = await fetch(
      fmpApi(`/profile/${finalSymbols}`)
    )

    const json = await allSpacs.json()

    if (json.length) {
      json.forEach(async (stock) => {
        await db.spac.create({
          data: {
            symbol: stock.symbol,
            ipoSymbol: stock.symbol,
            ipoDate: stock.ipoDate ? new Date(stock.ipoDate) : null,
          },
        })
      })

      return 'New SPACs added!'
    }
  } else {
    return 'No new SPACs'
  }
}
