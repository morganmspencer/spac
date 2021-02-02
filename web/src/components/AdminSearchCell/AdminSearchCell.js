import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query($symbol: String!) {
    stock: fmpStock(symbol: $symbol) {
      symbol
      price
      companyName
      ceo
      ipoDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ stock }) => {
  return (
    <div className="flex items-start justify-between">
      <ul>
        <li>Symbol: {stock.symbol}</li>
        <li>Price: {stock.price}</li>
        <li>Company Name: {stock.companyName}</li>
        <li>CEO: {stock.ceo}</li>
        <li>IPO Date: {stock.ipoDate}</li>
        <li>IPOs: {JSON.stringify(stock.ipos)}</li>
      </ul>
      <Link
        to={routes.newSpac({symbol: stock.symbol})}
        className="rw-button rw-button-green"
      >
        <div className="rw-button-icon">+</div> New Spac
      </Link>
    </div>
    )
}
