export const schema = gql`
  type Spac {
    id: String!
    symbol: String!
    ipoSymbol: String!
    ipoDate: DateTime
    ipoPrice: String
    mergerDate: DateTime
    users: [User]!
    createdAt: DateTime!
  }

  type Query {
    spacs: [Spac!]!
    spac(id: String): Spac
    spac(symbol: String): Spac
  }

  input CreateSpacInput {
    symbol: String!
    ipoSymbol: String!
    ipoDate: DateTime
    ipoPrice: String
    mergerDate: DateTime
  }

  input UpdateSpacInput {
    symbol: String
    ipoSymbol: String
    ipoDate: DateTime
    ipoPrice: String
    mergerDate: DateTime
  }

  type Mutation {
    createSpac(input: CreateSpacInput!): Spac!
    updateSpac(id: String!, input: UpdateSpacInput!): Spac!
    deleteSpac(id: String!): Spac!
  }
`
