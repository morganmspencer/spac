import DataCell from 'src/components/DataCell'
import MainLayout from 'src/layouts/MainLayout'
import NewsCell from 'src/components/NewsCell'

const DataPage = ({ symbol }) => {
  return (
    <MainLayout>
      <DataCell symbol={symbol} />
    </MainLayout>
  )
}

export default DataPage
