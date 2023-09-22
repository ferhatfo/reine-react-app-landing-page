import React from 'react'
import './Features.scss'
import Title from '../Title/Title'
import Image from 'next/image'
import Link from 'next/link';
function Features() {
  return (
    <>
      <section className='features' id='features'>
        <Title h2={`The Only App You Will Need`} p={`Nor again is there anyone who loves or pursues desires to obtain pain of itself, because it is pain, but because  occasionally circumstances.`} />
        <div className='featuresItems container'>
          <div className='featuresItem'>
            <Image src='/Images/svg/icon.svg' width={50} height={51} alt='icon' />
            <h3>Professional Design</h3>
            <p>To take a trivial example, which of us ever desires to undertakes laborious.</p>
          </div>
          <div className='featuresItem'>
            <Image src='/Images/svg/icon2.svg' width={62} height={51} alt='icon' />
            <h3>Friendly Support</h3>
            <p>To take a trivial example, which of us ever desires to undertakes laborious.</p>
          </div>
          <div className='featuresItem'>
            <Image src='/Images/svg/icon3.svg' width={41} height={51} alt='icon' />
            <h3>Fully Secured</h3>
            <p>To take a trivial example, which of us ever desires to undertakes laborious.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
