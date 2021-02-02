import { Link, routes } from '@redwoodjs/router'

import Spacs from 'src/components/Spacs'

export const QUERY = gql`
  query GET_FAVORITES($id: String!) {
    favorites: favorites(id: $id) {
      id
      symbol
      ipoSymbol
      ipoDate
      ipoPrice
      mergerDate
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div>No favorites yet.</div>
}

export const Success = ({ favorites }) => {
  return <Spacs spacs={favorites} />
}
