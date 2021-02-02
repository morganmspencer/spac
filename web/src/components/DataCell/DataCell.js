import { useParams, navigate, routes } from '@redwoodjs/router'
import Data from 'src/components/Data'
import NewsCell from 'src/components/NewsCell'

export const QUERY = gql`
  query FIND_SPAC_BY_SYMBOL($symbol: String!) {
    spac: spac(symbol: $symbol) {
      id
      symbol
      ipoSymbol
      ipoDate
      ipoPrice
      mergerDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Spac not found</div>

export const Success = ({ spac }) => {
  const { symbol } = useParams()

  return (
    <>
      {symbol !== spac.symbol ? (
        navigate(routes.data({ symbol: spac.symbol }))
      ) : (
        <>
          <Data spac={spac} />
          <div className="max-w-3xl mx-auto">
            {/* <NewsCell symbol={spac.symbol} /> */}
          </div>
        </>
      )}
    </>
  )
}
