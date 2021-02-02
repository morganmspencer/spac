import MainLayout from 'src/layouts/MainLayout'
import SpacListingCell from 'src/components/SpacListingCell'
import AllNewsCell from 'src/components/AllNewsCell'

const HomePage = () => {
  return (
    <MainLayout>
      <div className="flex gap-6">
        <div className="flex-1">
          <h1 className="mb-6">Latest News</h1>
          {/* <AllNewsCell /> */}
        </div>
        <aside className="max-w-xs sticky" style={{ width: '275px' }}>
          <SpacListingCell />
        </aside>
      </div>
    </MainLayout>
  )
}

export default HomePage
