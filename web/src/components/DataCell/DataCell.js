import { useParams, navigate, routes } from '@redwoodjs/router'
import Data from 'src/components/Data'
import NewsCell from 'src/components/NewsCell'

export const QUERY = gql`
  query FIND_SPAC_BY_SYMBOL($symbol: String!) {
    spac: stockData(symbol: $symbol) {
      symbol
      spac {
        id
        ipoPrice
        mergerDate
      }
      stock
      originalStock
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Spac not found</div>

export const Success = ({ spac }) => {
  const { symbol } = useParams()

  return (
    <>
      {console.log(spac)}
      {symbol !== spac.stock.symbol ? (
        navigate(routes.data({ symbol: spac.stock.symbol }))
      ) : (
        <>
          <Data spac={spac} />
          <NewsCell symbol={spac.symbol} />
        </>
      )}
    </>
  )
}
