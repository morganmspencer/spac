import SpacsLayout from 'src/layouts/SpacsLayout'
import EditSpacCell from 'src/components/EditSpacCell'

const EditSpacPage = ({ id }) => {
  return (
    <SpacsLayout>
      <EditSpacCell id={id} />
    </SpacsLayout>
  )
}

export default EditSpacPage
