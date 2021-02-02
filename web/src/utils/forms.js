const MAX_STRING_LENGTH = 150

export const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

export const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

export const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

export const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {datetime ? new Date(datetime).toUTCString() : ''}
    </time>
  )
}

export const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

export const formatDateOnSubmit = (input) => {
  if (!input) {
    return null
  } else {
    return input
  }
}
