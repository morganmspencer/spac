import SpacListing from 'src/components/SpacListing'

export const QUERY = gql`
  query SPACS {
    spacs {
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

export const Empty = () => {
  return <div className="rw-text-center">No spacs yet.</div>
}

export const Success = ({ spacs }) => {
  return <SpacListing spacs={spacs} />
}
