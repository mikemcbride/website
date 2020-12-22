import title from 'title'

export default function formatTitle(val) {
    return title(val, {
        special: ['AngularJS', 'iOS', 'macOS', 'iPhone', 'iPad', 'tvOS']
    })
}
