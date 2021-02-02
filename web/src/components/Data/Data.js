import { timeTag } from 'src/utils/forms'

const Data = ({ spac }) => {
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            {spac.symbol} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Symbol</th>
              <td>{spac.symbol}</td>
            </tr>
            <tr>
              <th>IPO Symbol</th>
              <td>{spac.ipoSymbol}</td>
            </tr>
            <tr>
              <th>IPO Date</th>
              <td>{timeTag(spac.ipoDate)}</td>
            </tr>
            <tr>
              <th>IPO Price</th>
              <td>{spac.ipoPrice}</td>
            </tr>
            <tr>
              <th>Merger Date</th>
              <td>{timeTag(spac.mergerDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Data
