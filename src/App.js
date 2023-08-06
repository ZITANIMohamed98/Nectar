import React from 'react'

import {AboutUs, Benifits, Cosmetics, Header, Intro, Reviews, Source, Testimonials} from './container';
import {Navbar, Footer} from './components';
const App = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <Reviews />
    <Benifits />
    <Intro />
    <AboutUs />
    <Cosmetics />
    <Source />
    <Testimonials />
    <Footer />

    </div>

  )
}

export default App