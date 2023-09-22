'use client'
import React from 'react'
import Title from '../Title/Title'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import Image from 'next/image'
import './Rewievs.scss'
export default function Rewievs() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
      <section className='rewievs'>
        <div className='container'>
            <Title h2={`Our happy customers`} p={`Nor again is there anyone who loves or pursues desires to obtain pain of itself, because it is pain, but because  occasionally circumstances.`} />
            <div className='rewievsSlider'>
                <Slider {...settings}>
                    <div className='rewievsSliderItem'>
                        <div className='rewievsSliderItemCenter'>
                            <Image src='/Images/r1.png' width={70} height={70} alt='Rewievs Icon' />
                            <div className='rewievsSliderItemDescription'>
                                <h6>Mia Cerny</h6>
                                <p>Itaque earum rerum hic tenetur a sapiente delectus, pain ut aut reiciendis voluptatibus.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rewievsSliderItem'>
                        <div className='rewievsSliderItemCenter'>
                            <Image src='/Images/r2.png' width={70} height={70} alt='Rewievs Icon' />
                            <div className='rewievsSliderItemDescription'>
                                <h6>Kelly Wal</h6>
                                <p>Itaque earum rerum hic tenetur a sapiente delectus, pain ut aut reiciendis voluptatibus.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rewievsSliderItem'>
                        <div className='rewievsSliderItemCenter'>
                            <Image src='/Images/r1.png' width={70} height={70} alt='Rewievs Icon' />
                            <div className='rewievsSliderItemDescription'>
                                <h6>Mia Cerny</h6>
                                <p>Itaque earum rerum hic tenetur a sapiente delectus, pain ut aut reiciendis voluptatibus.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rewievsSliderItem'>
                        <div className='rewievsSliderItemCenter'>
                            <Image src='/Images/r2.png' width={70} height={70} alt='Rewievs Icon' />
                            <div className='rewievsSliderItemDescription'>
                                <h6>Kelly Wal</h6>
                                <p>Itaque earum rerum hic tenetur a sapiente delectus, pain ut aut reiciendis voluptatibus.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
      </section>
    </>
  )
}
