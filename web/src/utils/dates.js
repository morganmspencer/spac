var monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function prettyDate(date) {
  var d = new Date(date)
  return (
    monthNames[d.getMonth()] +
    ' ' +
    d.getDay() +
    ', ' +
    d.getFullYear() +
    ', ' +
    d.toTimeString()
  )
}
