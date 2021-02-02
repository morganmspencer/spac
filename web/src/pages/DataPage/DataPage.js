import DataCell from 'src/components/DataCell'
import MainLayout from 'src/layouts/MainLayout'

const DataPage = ({ symbol }) => {
  return (
    <MainLayout>
      <h1>DataPage</h1>
      <DataCell symbol={symbol} />
    </MainLayout>
  )
}

export default DataPage
