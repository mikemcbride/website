<template>
  <div class="w-100 dark-gray sans-serif min-vh-100 flex flex-column">
    <SiteHeader />
    <main role="main" class="w-100 mw7 center ph3 flex-auto">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css');

:root {
	--xxs: .125rem;
	--xs: .25rem;
	--sm: .5rem;
	--md: 1rem;
	--lg: 2rem;
	--xl: 4rem;
	--xxl: 8rem;

  --near-white: #f9f9f9;
	--very-light-gray: #d7d7d7;
  --light-gray: #aaa;
  --gray: #777;
  --dark-gray: #333;
  --very-dark-gray: #111;

  --blue: #6085ff;
	--link-color: #067df7;
	--light-blue: #ecf1ff;
  --code-color: #dd00a9;
	--comment-color: #c0c0c0;

  --cyan: #008080;
  --syntax-blue: #0086b3;
  --navy: #183691;
  --purple: #795da3;
  --green: #63a35c;
  --pink: #a71d5d;
  --orange: #ed6a43;
  --yellow: #f0c674;
  --red: #b52a1d;
}

/**
* Set base font size for rem units
*/
html {
  font-size: 16px;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
}

*, *:before, *:after {
  box-sizing: inherit;
}

/**
* Reset margins on these things
*/
p, blockquote, pre,
ul, ol, dl, figure {
  margin-top: 0;
  margin-bottom: 1em;
}

h1, h2, h3, h4, h5, h6 { 
  margin: 1em 0;
  font-weight: 700;
}

/**
* Images
*/
img {
  vertical-align: middle;
}

/**
* Links
*/
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  color: var(--link-color);
  text-decoration: none;
}

.post-content a {
  @media screen and (min-width: 30em) {  
    &:hover { text-decoration: underline; }
  }
}

/**
* Paragraphs, ul, ol
*/
ul, p, ol {
  font-size: 14px;
  line-height: 1.8;
}

ul:not(.list) {
  list-style-type: none;
  padding-left: 0;
  
  li {
    padding-left: var(--md);
    
    &::before {
      color: var(--light-gray);
      content: '-';
      margin-left: -var(--md);
      margin-right: var(--sm);
    }
  }
}

/**
* Blockquotes
*/
blockquote {
  border-left: 4px solid var(--dark-gray);
  color: var(--gray);
  font-size: 1.2em;
  margin-left: 0;
  padding: var(--xs) 1em;
  width: 100%;

  > :last-child {
    margin-bottom: 0;
  }
}

/**
* Code styles
*/
pre, code, .code, .monospace {
  font-family: 'SFMono-Regular', Menlo, Monaco, Consolas, Courier, monospace;
}

code {
  color: var(--code-color);
  font-size: 90%;
  
  &::before,
  &::after {
    content: '`';
  }
}

pre {
  padding: var(--md);
  margin-top: 0;
  margin-bottom: var(--md);
  line-height: 23px;
  white-space: pre;
  overflow-x: auto;
  word-break: inherit;
  word-wrap: inherit;
  
  > code {
    &::before,
    &::after {
      content: none;
    }
  }
}

hr {
  border: 0px solid rgba(0,0,0,0.2);
  border-bottom-width: 1px;
  margin: var(--lg) 0;
}
</style>
