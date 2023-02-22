module.exports = {
    content: [ "./src/_includes/**/*.njk", "./src/**/*.html", "./src/**/*.njk", "./src/**/*.md" ],
    theme: {
        extend: {
            boxShadow: {
                'nav': '.2em .2em 0 0 rgb(228 228 231)',
                'nav-dark': '.2em .2em 0 0 rgb(39 39 42)'
            },
            fontFamily: {
                'sans': [
                    'Inter',
                    'system-ui',
                    'BlinkMacSystemFont',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Fira Sans',
                    'Droid Sans',
                    'Helvetica Neue',
                    'sans-serif',
                ],
                'serif': [
                    'Source Serif Pro',
                    'Georgia',
                    'serif',
                ],
                'display': [
                    'Notulen Display',
                    'Inter',
                    'system-ui',
                    'BlinkMacSystemFont',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Fira Sans',
                    'Droid Sans',
                    'Helvetica Neue',
                    'sans-serif',
                ],
                'mono': [
                    'Berkeley Mono',
                    'MonoLisa',
                    'SFMono-Regular',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    'Liberation Mono',
                    'Courier New',
                    'monospace',
                ],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ]
}
