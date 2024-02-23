import React from 'react'

import Head from 'next/head'
import Script from 'next/script'
import dynamic from 'next/dynamic'

import ESLocale from '../locales/es/locale'
import ENLocale from '../locales/en/locale'

import Header from '../components/header/Header'
import Scrolls from '../components/header/Scrolls'
import Landing from '../components/landing/Landing'
import About from '../components/about/About'
import Albums from '../components/albums/Albums'
import Gallery from '../components/gallery/Gallery'
import Contact from '../components/contact/Contact'
const Cookie = dynamic(
  () => import('../components/cookie/Cookie'),
  { ssr: false }
)

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      language: ESLocale,
    }
  }

  changeLanguage = () => {
    this.setState({
      language: this.state.language === ESLocale ? ENLocale : ESLocale
    })
  }

  render () {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#000000" />
          <title>Ogun Afrobeat</title>

          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex,nofollow" />

          <meta name="Description" content="Ogun Afrobeat is the first Afrobeat band in Spain of authentic Yoruba culture.
            Led by Akin Dimeji Onas from Lagos, Nigeria, one of the best African drummers in Spain, and backed by an irresistibly powerful horn and rhythm section,
            the group has an extraordinary on stage sound that puts it at the forefront of Afrobeat bands." />
          <meta property="og:title" content="Ogun Afrobeat website" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Ogun Afrobeat is the first Afrobeat band in Spain of authentic Yoruba culture.
            Led by Akin Dimeji Onas from Lagos, Nigeria, one of the best African drummers in Spain, and backed by an irresistibly powerful horn and rhythm section,
            the group has an extraordinary on stage sound that puts it at the forefront of Afrobeat bands." />
          <meta property="og:image" content="https://ogun-vercel.vercel.app/og_image.jpg" />
          <meta property="og:image:alt" content="logo" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://ogun-vercel.vercel.app/" />
          <meta property="og:site_name" content="Ogun Afrobeat website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Content Title" />
          <meta name="twitter:description" content="Ogun Afrobeat is the first Afrobeat band in Spain of authentic Yoruba culture.
            Led by Akin Dimeji Onas from Lagos, Nigeria, one of the best African drummers in Spain, and backed by an irresistibly powerful horn and rhythm section,
            the group has an extraordinary on stage sound that puts it at the forefront of Afrobeat bands." />
          <meta name="twitter:image" content="https://ogun-vercel.vercel.app/og_image.jpg" />
          <meta name="twitter:image:alt" content="Ogun Afrobet" />
          <meta name="twitter:url" content="https://ogun-vercel.vercel.app/" />

          <link rel="dns-prefetch" href="https://stackpath.bootstrapcdn.com" />
          <link rel="preconnect" href="https://stackpath.bootstrapcdn.com" crossOrigin="true" />

          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        </Head>

        <div id='outer-container'>
          <Header
            changeLanguage={this.changeLanguage}
            {...this.state.language.header}
          />
          <main id='page-wrap'>
            <Landing />
            <About
              {...this.state.language.about}
            />
            <Albums
              {...this.state.language.albums}
            />
            <Gallery
              {...this.state.language.gallery}
            />
            <Contact
              {...this.state.language.contact}
            />
          </main>
          <Cookie
            {...this.state.language.cookie}
          />
          <Scrolls/>
        </div>
      </>
    )
  }
}
