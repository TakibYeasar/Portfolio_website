import { Aboutme, Blogs, Hero, Projects, Skills, Testimonial } from '../containers'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='container'>
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Testimonial />
      <Blogs />
    </div>
  )
}
