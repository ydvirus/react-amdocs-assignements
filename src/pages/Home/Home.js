import React from 'react'
import ContactInfo from './ContactInfo/ContactInfo'
import Introduce from './Introduce/Introduce'
import Solutions from './Solutions/Solutions'
import Testimonial from './Testimonial/Testimonial'

function Home() {
  return (
    <>
      <Introduce />
      <Solutions />
      <Testimonial />
      <ContactInfo />
    </>
  )
}

export default Home