import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/SpacsCell'

const DELETE_SPAC_MUTATION = gql`
  mutation DeleteSpacMutation($id: String!) {
    deleteSpac(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Spac = ({ spac }) => {
  const { addMessage } = useFlash()
  const [deleteSpac] = useMutation(DELETE_SPAC_MUTATION, {
    onCompleted: () => {
      navigate(routes.spacs())
      addMessage('Spac deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete spac ' + id + '?')) {
      deleteSpac({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Spac {spac.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{spac.id}</td>
            </tr>
            <tr>
              <th>Symbol</th>
              <td>{spac.symbol}</td>
            </tr>
            <tr>
              <th>Ipo symbol</th>
              <td>{spac.ipoSymbol}</td>
            </tr>
            <tr>
              <th>Ipo price</th>
              <td>{spac.ipoPrice}</td>
            </tr>
            <tr>
              <th>Merger date</th>
              <td>{timeTag(spac.mergerDate)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(spac.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSpac({ id: spac.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(spac.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Spac
