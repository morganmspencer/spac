export const schema = gql`
  type Stock {
    symbol: String
    companyName: String
    ceo: String
    ipoDate: String
    description: String
    image: String
  }

  type StockData {
    symbol: String!
    spac: Spac
    stock: JSON
    originalStock: JSON
    stockJson: JSON
    originalStockJson: JSON
  }

  type Query {
    stockData(symbol: String!): StockData!
  }
`
