import React from 'react'
import './HomePage.scss'
import Link from 'next/link'
function HomePage() {
  return (
    <>
      <section className='homePage' id='homePage'>
        <div className='description'>
          <div className='descriptionCenter'>
            <h6>Welcome to Reine!</h6>
            <h1>A Perfect Landing Page to Showcase Your App</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
            <Link href="#">DISCOVER</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
