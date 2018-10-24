export default function (val) {
  let d = new Date(val)
  let day = d.getDay()
  let month = d.getMonth()
  let date = d.getDate()
  let year = d.getFullYear()
  
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  
  let months = [
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
    'December'
  ]
  
  return `${days[day]}, ${months[month]} ${date}, ${year}`
}
