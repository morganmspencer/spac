import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/SpacsCell'

const DELETE_SPAC_MUTATION = gql`
  mutation DeleteSpacMutation($id: String!) {
    deleteSpac(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const SpacsList = ({ spacs }) => {
  const { addMessage } = useFlash()
  const [deleteSpac] = useMutation(DELETE_SPAC_MUTATION, {
    onCompleted: () => {
      addMessage('Spac deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete spac ' + id + '?')) {
      deleteSpac({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Symbol</th>
            <th>Ipo symbol</th>
            <th>Ipo date</th>
            <th>Ipo price</th>
            <th>Merger date</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {spacs.map((spac) => (
            <tr key={spac.id}>
              <td>{truncate(spac.id)}</td>
              <td>{truncate(spac.symbol)}</td>
              <td>{truncate(spac.ipoSymbol)}</td>
              <td>{timeTag(spac.ipoDate)}</td>
              <td>{truncate(spac.ipoPrice)}</td>
              <td>{timeTag(spac.mergerDate)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.spac({ id: spac.id })}
                    title={'Show spac ' + spac.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSpac({ id: spac.id })}
                    title={'Edit spac ' + spac.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete spac ' + spac.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(spac.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SpacsList
