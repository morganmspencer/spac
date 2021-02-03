import fetch from 'node-fetch'
import { spac } from 'src/services/spacs'

function fmpApi(request) {
  const keySep = request.includes('?') ? '&' : '?'
  return (
    'https://financialmodelingprep.com/api/v3' +
    request +
    `${keySep}apikey=${process.env.FMP_API}`
  )
}

export const stockData = async ({ symbol }) => {
  var spacReturn = null,
      stock = null,
      originalStock = null

  // Check for SPAC in DB
  var spacReturn = await spac({ symbol: symbol })

  // Return null if SPAC not found
  if (!spacReturn) {
    return {
      symbol: symbol,
      spac: null,
      stock: null,
    }
  }

  // Get stock information from FMP
  const fmpResponse = await fetch(fmpApi(`/profile/${spacReturn.symbol}`))

  // If no response from FMP return null
  if (!fmpResponse) {
    return {
      symbol: symbol,
      spac: null,
      stock: null,
    }
  }

  // Set stock data
  const stockJson = await fmpResponse.json()
  stock = stockJson[0]

  if (spacReturn.ipoSymbol !== spacReturn.symbol) {
    const fmpResponse = await fetch(fmpApi(`/profile/${spacReturn.ipoSymbol}`))

    if (fmpResponse) {
      const originalStockJson = await fmpResponse.json()

      originalStock = originalStockJson[0]
    }
  }

  return {
    symbol: symbol,
    spac: spacReturn,
    stock: stock,
    originalStock: originalStock,
  }
}
