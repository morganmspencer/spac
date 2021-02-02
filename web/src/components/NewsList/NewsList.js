import { prettyDate } from 'src/utils/dates'

const NewsList = ({ news }) => {
  return (
    <>
      {news.map((item, i) => (
        <article key={i} className="mb-8 pb-8 border-solid border-b">
          <a href={item.url} className="flex gap-4 items-start">
            <img src={item.image} alt={item.title} className="max-w-xs" />
            <div>
              <span className="text-xs mb-1">
                {prettyDate(item.publishedDate)}
              </span>
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-sm">{item.text}</p>
            </div>
          </a>
        </article>
      ))}
    </>
  )
}

export default NewsList
