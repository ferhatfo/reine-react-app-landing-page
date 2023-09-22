'use client';
import React from 'react'
import './Footer.scss'
import Image from 'next/image'
export default function Footer() {
  return (
    <>
      <footer>
        <div className='container'>
            <div className='footerSubscribe'>
                <div className='footerSubscribeForm'>
                    <h2>Subscribe Our newsletter</h2>
                    <form>
                        <input
                            aria-label="Enter your e-mail address"
                            name="email"
                            placeholder="Enter your e-mail address"
                            type="text">

                        </input>
                        <button>
                            <Image src='/Images/svg/subscribe.svg' width={26} height={22} alt='Subscribe' />
                        </button>
                    </form>
                </div>
            </div>
            <div className='footerBottom'>
                <Image src='/Images/svg/footer-logo.svg' width={94} height={66} alt='Logo' />
                <p>© 2023 Reine. All Rights Reserved.</p>
            </div>
        </div>
      </footer>
    </>
  )
}
