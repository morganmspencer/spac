import { prettyDate } from 'src/utils/dates'

export const NewsListItem = (props) => {
  return (
    <article className="mb-8 pb-8 border-solid border-b">
      {!props.loader ? (
        <a href={props.url} target="_blank" className="flex flex-col gap-4 items-start md:flex-row">
          <img src={props.image} alt={props.title} className="mx-auto sm:max-w-lg md:max-w-xs" />
          <div className="flex-1 mx-auto sm:max-w-lg md:max-w-full">
            <span className="text-xs mb-1">
              {prettyDate(props.publishedDate)}
            </span>
            <h3 className="mb-2">{props.title}</h3>
            <p className="text-sm">{props.text}</p>
          </div>
        </a>
      ) : (
        <div className="flex gap-4 items-start">
          <div className="max-w-xs bg-gray-300 animate-pulse h-0 w-full overflow-hidden" style={{paddingBottom: '56.25%'}} />
          <div>
            <div className="text-xs mb-1 w-full bg-gray-300 animate-pulse p-2" />
            <div className="mb-2" />
            <div className="text-sm" />
          </div>
        </div>
      )}
    </article>
  )
}

const NewsList = ({ news }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="mb-6">Latest News</h2>
      {news.map((item, i) => (
        <NewsListItem
          key={i}
          title={item.title}
          url={item.url}
          image={item.image}
          text={item.text}
          publishedDate={item.publishedDate}
        />
      ))}
    </div>
  )
}

export default NewsList
