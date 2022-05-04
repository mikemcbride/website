module.exports = {
    content: [ "./src/_includes/**/*.njk", "./src/**/*.html", "./src/**/*.njk", "./src/**/*.md" ],
    theme: {
        extend: {
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
