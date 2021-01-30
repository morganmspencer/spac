import { Link, routes } from '@redwoodjs/router'

import Spacs from 'src/components/Spacs'

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
  return (
    <div className="rw-text-center">
      {'No spacs yet. '}
      <Link to={routes.newSpac()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ spacs }) => {
  return <Spacs spacs={spacs} />
}
