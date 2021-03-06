module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'black': '#1b212c',
                'blue': {
                    'DEFAULT': '#2563EB'
                },
                'white': '#ffffff',
                'inherit': 'inherit',
                'yellow': {
                    'DEFAULT': '#f7f474'
                },
                'aqua': {
                    'DEFAULT': '#5CEACE'
                },
                'teal': {
                    'DEFAULT': '#27ffbc'
                },
                'hot-pink': '#fd2d78',
                'purple': {
                    'DEFAULT': '#6D28D9'
                },
                'code-gray': '#CBD5E1'
            },
            inset: {
                '1/2': '50%'
            },
            zIndex: {
                '-1': '-1',
            },
            opacity: {
                '10': '0.1',
            }
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
                'Georgia',
                'serif',
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
        fontSize: {
            'xs': '.75rem',     // 12px
            'sm': '.875rem',    // 14px
            'base': '1rem',     // 16px
            'lg': '1.125rem',   // 18px
            'xl': '1.25rem',    // 20px
            '2xl': '1.5rem',    // 24px
            '3xl': '1.75rem',   // 28px
            '4xl': '2.25rem',   // 36px
            '5xl': '3rem',      // 48px
        },
        textColor: theme => theme('colors'),
        backgroundColor: theme => theme('colors'),
        height: {
            'auto': 'auto',
            'px': '1px',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '24': '6rem',
            '32': '8rem',
            '48': '12rem',
            '64': '16rem',
            'full': '100%',
            'screen': '100vh',
        },
        rotate: {
            '-180': '-180deg',
            '-90': '-90deg',
            '-45': '-45deg',
            '-30': '-30deg',
            '-22': '-22.5deg',
            '-15': '-15deg',
            '-10': '-10deg',
            '-9': '-9deg',
            '-8': '-8deg',
            '-7': '-7deg',
            '-6': '-6deg',
            '-5': '-5deg',
            '-4': '-4deg',
            '-3': '-3deg',
            '-2': '-2deg',
            '-1': '-1deg',
            '0': '0',
            '1': '1deg',
            '2': '2deg',
            '3': '3deg',
            '4': '4deg',
            '5': '5deg',
            '6': '6deg',
            '7': '7deg',
            '8': '8deg',
            '9': '9deg',
            '10': '10deg',
            '15': '15deg',
            '22': '22.5deg',
            '30': '30deg',
            '45': '45deg',
            '90': '90deg',
            '180': '180deg',
        },
        skew: {
            '-12': '-12deg',
            '-6': '-6deg',
            '-4': '-4deg',
            '-3': '-3deg',
            '-2': '-2deg',
            '-1': '-1deg',
            '0': '0deg',
            '1': '1deg',
            '2': '2deg',
            '3': '3deg',
            '4': '4deg',
            '6': '6deg',
            '12': '12deg',
        },
        spacing: {
            px: '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '7': '1.75rem',
            '8': '2rem',
            '9': '2.25rem',
            '10': '2.5rem',
            '12': '3rem',
            '14': '3.5rem',
            '16': '4rem',
            '20': '5rem',
            '22': '5.5rem',
            '24': '6rem',
            '26': '6.5rem',
            '28': '7rem',
            '30': '7.5rem',
            '32': '8rem',
            '34': '8.5rem',
            '36': '9rem',
            '38': '9.5rem',
            '40': '10rem',
            '44': '11rem',
            '48': '12rem',
            '52': '13rem',
            '56': '14rem',
            '60': '15rem',
            '64': '16rem',
            '68': '17rem',
            '72': '18rem',
            '76': '19rem',
            '80': '20rem',
            '88': '22rem',
            '96': '24rem',
            '104': '26rem',
            '110': '28rem',
            '118': '30rem',
            '126': '32rem',
            '132': '34rem',
            '140': '36rem',
        },
    },
    corePlugins: {
        container: false
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
    variants: {
        rotate: ['responsive', 'hover', 'focus', 'group-hover'],
        translate: ['responsive', 'hover', 'focus', 'group-hover'],
    }
}
