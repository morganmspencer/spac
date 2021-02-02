import Spacs from 'src/components/Spacs'

export const QUERY = gql`
  query SPACS {
    spacs {
      id
      symbol
      ipoSymbol
      ipoPrice
      mergerDate
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No spacs yet.'}
    </div>
  )
}

export const Success = ({ spacs }) => {
  return <Spacs spacs={spacs} />
}
