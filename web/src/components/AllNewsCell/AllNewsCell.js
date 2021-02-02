import NewsList from 'src/components/NewsList'

export const QUERY = gql`
  query AllNewsQuery {
    allSpacNews
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No news to display</div>

export const Failure = ({ error }) => {
  console.log(error.message)
  return <div>Error loading news</div>
}

export const Success = ({ allSpacNews }) => {
  return <NewsList news={allSpacNews} />
}
