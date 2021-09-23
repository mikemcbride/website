import Link from '../components/Link'
import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import PageHeader from '../components/PageHeader'
import LikesDislikes from '../components/LikesDislikes'
import WhatOthersAreSaying from '../components/WhatOthersAreSaying'
import OxfordCommaJoke from '../components/OxfordCommaJoke'

const Index = ({ title, description }) => (
    <Layout pageTitle={title} description={description}>
        <section className="md:flex">
          <div className="text-center mb-8 mt-4 md:mr-8">
            <Avatar />
          </div>
          <div>
            <p className="md:mt-4 mb-4 text-4xl inline-block font-slab font-bold">
              Hey there! <span className="inline-block mx-1 text-3xl">👋</span> I'm Mike.
            </p>
            <div className="leading-loose text-lg md:text-xl text-gray-800 dark:text-gray-300">
              <p className="mb-16 md:mb-32">
                And this is my website. I worked really hard on it just for you (yes, YOU), so I hope you like it. Let's
                get to know each other... I'll start.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-64">
          <PageHeader>About Me</PageHeader>
          <div className="leading-loose text-lg md:text-xl text-gray-800 dark:text-gray-300">
            I'm a web developer from St. Louis, MO, where I live with&nbsp;
            <a rel="nofollow noreferrer" target="_blank" className="default-link" href="https://instagram.com/putting.on.love">my wife</a>
            &nbsp;and our four children. I enjoy running, LSU football, reading, Oxford commas<OxfordCommaJoke /> and keyboard shortcuts.
          </div>
        </section>
        <LikesDislikes />
        <WhatOthersAreSaying />
        <p className="leading-loose text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-12">
             I like meeting new people. If you do too, you can hit me up on <a rel="nofollow noreferrer" target="_blank" className="default-link" href="https://twitter.com/_mcbridem_">Twitter</a> and return the favor. If you're still not sure, you can keep browsing this site and make up your mind. Maybe <Link href="/projects" className="default-link">check out some stuff I've built</Link> or <Link href="/writing" className="default-link">read some words I've written</Link>.
        </p>
        <p className="mb-24 text-lg md:text-xl">Thanks for stopping by!</p>
    </Layout>
)

export default Index

export async function getStaticProps() {
  const configData = await import('../siteconfig.json')

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
