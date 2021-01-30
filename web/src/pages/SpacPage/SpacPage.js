import SpacsLayout from 'src/layouts/SpacsLayout'
import SpacCell from 'src/components/SpacCell'

const SpacPage = ({ id }) => {
  return (
    <SpacsLayout>
      <SpacCell id={id} />
    </SpacsLayout>
  )
}

export default SpacPage
