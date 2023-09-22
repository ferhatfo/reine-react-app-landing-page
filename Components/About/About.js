'use client';
import React from 'react'
import Title from '../Title/Title'
import './About.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react';
function About() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  return (
    <section className='aboutSection' id='aboutSection'>
      <div className='container'>
        <div className='about'>
          <div className='aboutMockup'>
            <Image src='/Images/mockup.png' width={268} height={535} alt='mockup' />
          </div>
          <div className='aboutDescription'>
            <Title h2={`Ease of use of Reine application. Read More About us`} p={`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer the truth, the master-builder of human happiness..`} />
            <div className='aboutDescrptionBottom'>
              {posts.slice(0, 4).map((post) => (
                <div className='aboutDescrptionBottomItem'>
                  <p key={post.id}>{post.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
