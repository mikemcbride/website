import title from 'title'

export default function (val) {
  return title(val, {
    special: ['AngularJS', 'iOS', 'macOS', 'iPhone', 'iPad', 'tvOS'] // exceptions
  })
}