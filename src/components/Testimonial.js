import React from 'react'
import '../App.css'


const Testimonial = (props) => {
  return (
    <div className='testimonial-container'>
      <img className='testimonial-img' src={('https://images.unsplash.com/photo-1652562809397-447a2a5fade2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')} alt={props.name} />
      <div className='text-testimonial-container'>
       <p className='testimonial-name'>{props.name} en {props.country}</p>
       <p className='testimonial-job'>{props.job} en {props.company}</p>
       <p className='testimonial-text'>{props.testimonial}</p>
      </div>
    </div>
  )
}

export default Testimonial