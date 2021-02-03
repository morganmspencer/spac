const GridItem = (props) => {
  return (
    <div className={`${props.className ? props.className : ''}`}>
      <strong>{props.title}</strong>
      <p>{props.content ? props.content : '--'}</p>
    </div>
  )
}

const StockInfoGrid = ({ stock }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm max-w-6xl">
      <GridItem title="CEO" content={stock.ceo} />
      <GridItem title="IPO Date" content={stock.ipoDate} />
    </div>
  )
}

export default StockInfoGrid
