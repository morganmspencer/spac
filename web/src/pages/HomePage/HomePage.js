import MainLayout from 'src/layouts/MainLayout'
import DataSection from 'src/components/DataSection'
import SpacListingCell from 'src/components/SpacListingCell'
import AllNewsCell from 'src/components/AllNewsCell'

const HomePage = () => {
  return (
    <MainLayout>
      <DataSection>
        <h1 className="sticky mb-4">SPACs</h1>
        <SpacListingCell />
      </DataSection>
      <section className="max-w-2xl mx-auto">
        <AllNewsCell />
      </section>
    </MainLayout>
  )
}

export default HomePage
