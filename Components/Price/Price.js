'use client'
import React from 'react'
import Title from '../Title/Title'
import './Price.scss'
export default function Price() {
  return (
    <>
    <section className='price'>
        <div className='container'>
            <Title h2={`Choise the best pricing plans`} p={`Nor again is there anyone who loves or pursues desires to obtain pain of itself, because it is pain, but because  occasionally circumstances.`} />
            <div className='priceElements'>
                <div className='priceElementsItem'>
                    <div className='priceElementsItemTitle'>
                        <h6>STARTER PLANS</h6>
                    </div>
                    <div className='priceElementsItemCenter'>
                        <span className='priceElementsItemCenterTitle'>
                            19
                        </span>
                        <span className='priceElementsItemCenterMounth'>
                            / MO
                        </span>
                        <div className='priceElementsItemCenterDescription'>
                            <ul>
                                <li>PREMIUM PROFILE LISTING</li>
                                <li>UNLIMITED FILE ACCESS</li>
                                <li>FREE APPOINTMENTS</li>
                                <li>5 POINTS EVERY MONTH</li>
                                <li>2 MONTHS SUPPORT</li>
                                <li>2 SUBDOMAINS</li>
                            </ul>
                        </div>
                        <div className='priceElementsItemButton'>
                            <a href='#'>BUY NOW</a>
                        </div>
                    </div>
                </div>
                <div className='priceElementsItem priceElementsItemActive'>
                    <div className='priceElementsItemTitle'>
                        <h6>STANDART PLANS</h6>
                    </div>
                    <div className='priceElementsItemCenter'>
                        <span className='priceElementsItemCenterTitle'>
                            39
                        </span>
                        <span className='priceElementsItemCenterMounth'>
                            / MO
                        </span>
                        <div className='priceElementsItemCenterDescription'>
                            <ul>
                                <li>PREMIUM PROFILE LISTING</li>
                                <li>UNLIMITED FILE ACCESS</li>
                                <li>FREE APPOINTMENTS</li>
                                <li>5 POINTS EVERY MONTH</li>
                                <li>2 MONTHS SUPPORT</li>
                                <li>2 SUBDOMAINS</li>
                            </ul>
                        </div>
                        <div className='priceElementsItemButton'>
                            <a href='#'>BUY NOW</a>
                        </div>
                    </div>
                </div>
                <div className='priceElementsItem'>
                    <div className='priceElementsItemTitle'>
                        <h6>PLATINIUM PLANS</h6>
                    </div>
                    <div className='priceElementsItemCenter'>
                        <span className='priceElementsItemCenterTitle'>
                            69
                        </span>
                        <span className='priceElementsItemCenterMounth'>
                            / MO
                        </span>
                        <div className='priceElementsItemCenterDescription'>
                            <ul>
                                <li>PREMIUM PROFILE LISTING</li>
                                <li>UNLIMITED FILE ACCESS</li>
                                <li>FREE APPOINTMENTS</li>
                                <li>5 POINTS EVERY MONTH</li>
                                <li>2 MONTHS SUPPORT</li>
                                <li>2 SUBDOMAINS</li>
                            </ul>
                        </div>
                        <div className='priceElementsItemButton'>
                            <a href='#'>BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}
