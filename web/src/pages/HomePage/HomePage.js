import { useState } from 'react'
import MainLayout from 'src/layouts/MainLayout'
import DataSection from 'src/components/DataSection'
import SpacListingCell from 'src/components/SpacListingCell'
import AllNewsCell from 'src/components/AllNewsCell'

const HomePage = () => {
  const [filter, setFilter] = useState('active')

  const filterValues = [
    {label: 'Active SPACs', value: 'active'},
    {label: 'Merged SPACs', value: 'merged'},
    {label: 'All Merged and Active', value: 'all'}
  ]

  return (
    <MainLayout>
      <DataSection className="pt-0 pb-0 flex flex-col">
        <div className="py-3 text-center">
            <select className="h5 font-bold bg-white px-2 py-1 rounded-md border-solid border border-gray-300" onChange={e => setFilter(e.currentTarget.value)}>
              {filterValues.map((item, i) => (
                <option key={i} value={item.value}>{item.label}</option>
              ))}
            </select>
        </div>
        <SpacListingCell filter={filter} />
      </DataSection>
      <section className="max-w-2xl mx-auto">
        <AllNewsCell />
      </section>
    </MainLayout>
  )
}

export default HomePage
