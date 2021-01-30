import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SpacForm from 'src/components/SpacForm'

import { QUERY } from 'src/components/SpacsCell'

const CREATE_SPAC_MUTATION = gql`
  mutation CreateSpacMutation($input: CreateSpacInput!) {
    createSpac(input: $input) {
      id
    }
  }
`

const NewSpac = () => {
  const { addMessage } = useFlash()
  const [createSpac, { loading, error }] = useMutation(CREATE_SPAC_MUTATION, {
    onCompleted: () => {
      navigate(routes.spacs())
      addMessage('Spac created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createSpac({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Spac</h2>
      </header>
      <div className="rw-segment-main">
        <SpacForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSpac
