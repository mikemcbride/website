<template>
    <div></div>
</template>

<script>
export default {
    name: 'KonamiCode',
    data() {
      return {
          sequence: [],
          havocCount: 0
      }
    },
    created() {
        this.resetSequence()
    },
    mounted() {
      window.addEventListener('keydown', this.handleKeypress)
    },
    destroyed() {
      window.removeEventListener('keydown', this.handleKeypress)
    },
    methods: {
        resetSequence() {
            this.sequence = [
                'ArrowUp',
                'ArrowUp',
                'ArrowDown',
                'ArrowDown',
                'ArrowLeft',
                'ArrowRight',
                'ArrowLeft',
                'ArrowRight',
                'KeyB',
                'KeyA'
            ]
        },
        handleKeypress(e) {
            if (e.code === this.sequence[0]) {
                this.sequence = [...this.sequence].slice(1)
            } else {
                this.resetSequence()
            }
            if (this.sequence.length === 0) {
                this.wreakHavoc()
            }
        },
        wreakHavoc() {
            this.havocCount += 1
            if (this.havocCount === 1) {
                // make everything Comic Sans
                this.addStylesheet(`body, .font-sans, .font-mono, .font-serif { font-family: 'Comic Sans MS' !important; }`)
            }

            if (this.havocCount === 2) {
                alert(`You thought that would undo it? lol ok. Let's have some fun.`)
                // turn the page upside down
                this.addStylesheet(`html { transform: rotate(180deg); }`)
            }

            if (this.havocCount === 3) {
                alert('Playing with fire? I like it.')
                let css = `
                    body {
                        animation-name: spin;
                        animation-duration: 5000ms;
                        animation-iteration-count: 1;
                        animation-timing-function: ease-in-out;
                    }
                    @keyframes spin {
                        from { transform: rotate(0deg) }
                        to { transform: rotate(4320deg) }
                    }
                `
                this.addStylesheet(css)
            }

            // reset it so that it can happen again
            this.resetSequence()
        },
        addStylesheet(css) {
            let style = document.createElement('style')
            document.head.appendChild(style)
            style.type = 'text/css'
            style.appendChild(document.createTextNode(css))
        }
    },
}
</script>
