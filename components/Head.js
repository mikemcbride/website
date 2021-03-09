import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = 'Mike McBride is making stuff for the internet'
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preload" href="/inter/Inter.var-subset.woff2" as="font" crossOrigin="anonymous" />
    <link rel="preload" href="/monolisa/MonoLisa-Regular.woff2" as="font" crossOrigin="anonymous" />
    <link rel="preload" href="/monolisa/MonoLisa-Medium.woff2" as="font" crossOrigin="anonymous" />
    <link rel="preload" href="/monolisa/MonoLisa-RegularItalic.woff2" as="font" crossOrigin="anonymous" />
    <link rel="stylesheet" href="/monolisa/monolisa.css" />
    <link rel="stylesheet" href="/inter/inter.css" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || 'Mike McBride'} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
