const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const months = [
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

export default function formatDate(val) {
    if (!val) return null
    let d = new Date(val)
    let day = d.getDay()
    let month = d.getMonth()
    let date = d.getDate()
    let year = d.getFullYear()

    return `${days[day]}, ${months[month]} ${date}, ${year}`
}
