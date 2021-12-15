module.exports = {
    content: [ "./src/_includes/**/*.njk", "./src/**/*.html", "./src/**/*.njk" ],
    theme: {
        extend: {
            fontFamily: {
                'sans': [
                    'Atkinson Hyperlegible',
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
                    'Atkinson Hyperlegible',
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
        require('@tailwindcss/typography')
    ]
}
