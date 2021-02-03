import {newsTruncate} from 'src/utils/forms'

export const NewsListItem = (props) => {
  return (
    <article className="news-item mb-8 pb-8 border-solid border-b">
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col gap-4 items-start md:flex-row"
      >
        {props.image &&
          <img
            src={props.image}
            alt={props.title}
            className="mx-auto sm:max-w-lg md:max-w-xs"
          />
        }
        <div className="flex-1 mx-auto sm:max-w-lg md:max-w-full">
          <p className="text-xs mb-1 flex flex-wrap gap-2">
            <span className="font-bold">{props.site}</span>
            <time>{new Date(props.publishedDate).toLocaleString()}</time>
          </p>
          <h3 className="mb-2">{props.title}</h3>
          <p className="text-sm">{newsTruncate(props.text)}</p>
        </div>
      </a>
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
          site={item.site}
        />
      ))}
    </div>
  )
}

export default NewsList
