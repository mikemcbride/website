import Link from 'next/link'
import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import PageHeader from '../components/PageHeader'
import LikesDislikes from '../components/LikesDislikes'
import WhatOthersAreSaying from '../components/WhatOthersAreSaying'
import OxfordCommaJoke from '../components/OxfordCommaJoke'
import Divider from '../components/Divider'

const Index = ({ title, description, ...props }) => (
    <Layout pageTitle={title}>
        <section className="md:flex">
          <div className="text-center mb-8 mt-4 md:mr-8">
            <Avatar />
          </div>
          <div>
            <p className="md:mt-4 mb-4 text-4xl inline-block font-sans font-black">
              Hey there! <span className="inline-block mx-1">👋</span> I'm Mike.
            </p>
            <div className="leading-loose text-lg md:text-xl text-gray-800">
              <p className="mb-16 md:mb-32">
                And this is my website. I worked really hard on it just for you (yes, YOU), so I hope you like it. Let's
                get to know each other... I'll start.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-48">
          <PageHeader>About Me</PageHeader>
          <div className="leading-loose text-lg md:text-xl text-gray-800">
            I'm a web developer from St. Louis, MO, where I live with&nbsp;
            <a rel="nofollow noreferrer" target="_blank" className="text-blue underline hover:text-hot-pink hover:underline" href="https://instagram.com/putting.on.love">my wife</a>
            &nbsp;and our four children. I enjoy running, LSU football, reading, Oxford commas<OxfordCommaJoke /> and keyboard shortcuts.
          </div>
        </section>
        <LikesDislikes />
        <section className="w-1/2 md:w-1/3 text-gray-400 mx-auto mb-20">
            <Divider className="w-full" />
        </section>
        <WhatOthersAreSaying />
        <p className="leading-loose text-lg md:text-xl text-gray-800 mb-12">
             I like meeting new people. If you do too, you can hit me up on <a rel="nofollow noreferrer" target="_blank" className="text-blue underline hover:text-hot-pink hover:underline" href="https://twitter.com/_mcbridem_">Twitter</a> and return the favor. If you're still not sure, you can keep browsing this site and make up your mind. Maybe <Link href="/projects"><a className="text-blue underline hover:text-hot-pink hover:underline">check out some stuff I've built</a></Link> or <Link href="/writing"><a className="text-blue underline hover:text-hot-pink hover:underline">read some words I've written</a></Link>.
        </p>
        <p className="mb-24 text-lg md:text-xl">Thanks for stopping by!</p>
    </Layout>
)

export default Index
