import {  useEffect, useState } from 'react'
import '../index.css'
import Form from '../tutorial-5/components/Form'
import { Testimonials } from './components/Testimonials'

export interface ITestimonial {
  fullName: string
  email: string
  createdAt: string
  text: string
}



const App = () => {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([])

  const onSendTeastimonial = (testimonial: ITestimonial) => {
    setTestimonials([...testimonials, testimonial])
  }

  const onDelete = (id: string): void => {
    const newArr = testimonials.filter((_, i) => i + '' !== id)
    setTestimonials(newArr)
  }

  useEffect(() => {
    const oldTestimonials = localStorage.getItem('testimonials')
    if (oldTestimonials?.length) {
      setTestimonials([...JSON.parse(oldTestimonials)])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials))
  }, [testimonials])

  return (
    <div className='app'>
      <Testimonials testimonials={testimonials} onClick={onDelete} />
      <Form onSubmit={onSendTeastimonial} />
    </div>
  )
}

export default App
