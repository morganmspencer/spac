const DataSection = (props) => {
  return (
    <section
      className={`${props.className ? props.className : ''} mb-12 -mt-12 -mx-wrap px-wrap py-12 bg-gray-100 overflow-hidden`}
      style={{ minHeight: '50vh' }}
    >
      {props.children}
    </section>
  )
}

export default DataSection
