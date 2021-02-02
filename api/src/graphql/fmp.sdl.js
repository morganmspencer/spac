export const schema = gql`
  type FMPStock {
    symbol: String!
    price: String!
    companyName: String!
    ceo: String
    ipoDate: String
    ipoPrice: String
    stock: JSON
  }
  type Query {
    fmpStock(symbol: String!): FMPStock
    spacNews(symbol: String!, limit: Int): JSON
    allSpacNews: JSON
    getFmpSpacs: JSON
  }
`
