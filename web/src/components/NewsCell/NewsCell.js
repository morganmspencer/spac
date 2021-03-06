import NewsList from 'src/components/NewsList'

export const QUERY = gql`
  query($symbol: String!) {
    news: spacNews(symbol: $symbol)
  }
`

export const Loading = () => <div className="text-center">Loading...</div>

export const Empty = () => <div className="text-center">No news to display</div>

export const Failure = ({ error }) => {
  console.log(error.message)
  return <div>Error loading news</div>
}

export const Success = ({ news }) => {
  return <NewsList news={news} />
}
