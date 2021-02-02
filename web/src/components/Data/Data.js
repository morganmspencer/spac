import DataSection from 'src/components/DataSection'
import StockInfoGrid from 'src/components/StockInfoGrid'
import FavoriteCell from 'src/components/FavoriteToggleCell'

const Data = ({ spac }) => {
  return (
    <DataSection>
      {/* {spac.stock?.image && <img src={spac.stock.image} alt={spac.stock?.companyName} />} */}
      <div className="flex flex-wrap items-center mb-12">
        <h1 className="mr-3">{spac.stock.companyName + ' (' + spac.stock.symbol + ')'}</h1>
        <FavoriteCell spacId={spac.spac?.id} />
      </div>
      {spac.stock.description && <p className="mb-12 -mt-6 max-w-3xl">{spac.stock.description}</p>}
      <div className="flex flex-col gap-12 w-full">
        <div className="flex-1">
          {spac.originalStock && <p className="h6 mb-2"><strong>Merged stock: </strong>{spac.stock.companyName + ' (' + spac.stock.symbol + ')'}</p> }
          <StockInfoGrid stock={spac.stock} />
        </div>
        {spac.originalStock &&
          <div className="flex-1">
            <p className="h6 mb-2"><strong>Original SPAC: </strong>{spac.originalStock.companyName + ' (' + spac.originalStock.symbol + ')'}</p>
            <StockInfoGrid stock={spac.originalStock} />
          </div>
        }
      </div>
    </DataSection>
  )
}

export default Data
