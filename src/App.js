import React from 'react'
import './App.css'
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <div className='appContainer'>
      {/* <h1>Testimonials App</h1> */}
      <div className='appWapprer'>
      <h1>Testimonials App</h1>
        <Testimonial 
          name='Fernando' 
          country="USA"
          job="Software Engineer"
          company="Google"
          testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique at felis a maximus. Phasellus sagittis consectetur tempus. Suspendisse fringilla vestibulum nulla, quis tincidunt orci mattis in. Aliquam aliquam elementum libero, a bibendum diam sodales eget. Fusce sodales mauris arcu, eu semper mauris lacinia sed. Nam dignissim ligula in nulla fringilla, eu varius diam blandit. Suspendisse leo ligula, tristique eget tristique pellentesque, condimentum vel lectus."
        />
        <Testimonial 
          name='Another Name' 
          country="USA"
          job="Software Engineer Level II"
          company="Google"
          testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique at felis a maximus. Phasellus sagittis consectetur tempus. Suspendisse fringilla vestibulum nulla, quis tincidunt orci mattis in. Aliquam aliquam elementum libero, a bibendum diam sodales eget. Fusce sodales mauris arcu, eu semper mauris lacinia sed. Nam dignissim ligula in nulla fringilla, eu varius diam blandit. Suspendisse leo ligula, tristique eget tristique pellentesque, condimentum vel lectus."
        />
        <Testimonial 
          name='Steve Jobs' 
          country="USA"
          job="Software Engineer III"
          company="Google"
          testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique at felis a maximus. Phasellus sagittis consectetur tempus. Suspendisse fringilla vestibulum nulla, quis tincidunt orci mattis in. Aliquam aliquam elementum libero, a bibendum diam sodales eget. Fusce sodales mauris arcu, eu semper mauris lacinia sed. Nam dignissim ligula in nulla fringilla, eu varius diam blandit. Suspendisse leo ligula, tristique eget tristique pellentesque, condimentum vel lectus."
        />
      </div>
    </div>
  )
}

export default App
