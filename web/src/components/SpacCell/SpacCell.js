import Spac from 'src/components/Spac'

export const QUERY = gql`
  query FIND_SPAC_BY_ID($id: String!) {
    spac: spac(id: $id) {
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
  return <Spac spac={spac} />
}