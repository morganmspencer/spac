export const schema = gql`
  type User {
    id: String!
    email: String!
    favorites: [Spac]!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
    favorites(id: String!): Spac!
  }

  input CreateUserInput {
    email: String!
  }

  input UpdateUserInput {
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    addUserFavorite(id: String!, spacId: String!): User!
    removeUserFavorite(id: String!, spacId: String!): User!
    deleteUser(id: String!): User!
  }
`
