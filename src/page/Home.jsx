import React from 'react'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Access from '../components/Access'
import Templates from '../components/Templates'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Header />
        <Gallery />
        <Access />
        <Templates />
        <Footer />
    </div>
  )
}
