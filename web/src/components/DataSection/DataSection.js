const DataSection = ({ children }) => {
  return (
    <section
      className="mb-12 -mt-12 -mx-wrap px-wrap py-12 bg-gray-100 shadow-inset overflow-y-auto"
      style={{ maxHeight: '60vh' }}
    >
      {children}
    </section>
  )
}

export default DataSection
