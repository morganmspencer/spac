import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SpacForm from 'src/components/SpacForm'

export const QUERY = gql`
  query FIND_SPAC_BY_ID($id: String!) {
    spac: spac(id: $id) {
      id
      symbol
      ipoSymbol
      ipoPrice
      mergerDate
      createdAt
    }
  }
`
const UPDATE_SPAC_MUTATION = gql`
  mutation UpdateSpacMutation($id: String!, $input: UpdateSpacInput!) {
    updateSpac(id: $id, input: $input) {
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

export const Success = ({ spac }) => {
  const { addMessage } = useFlash()
  const [updateSpac, { loading, error }] = useMutation(UPDATE_SPAC_MUTATION, {
    onCompleted: () => {
      navigate(routes.spacs())
      addMessage('Spac updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateSpac({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Spac {spac.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SpacForm spac={spac} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
