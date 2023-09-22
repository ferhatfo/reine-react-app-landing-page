'use client';
import './VideoSection.scss'
import Image from 'next/image'
import 'node_modules/react-modal-video/scss/modal-video.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
function Product() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className='videoSection'>
        <div className='container'>
          <div className='videoBg'>
            <Image className='videoSectionBg' src='/Images/videoBg.jpg' width={1000} height={500} alt='video Background' />
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)} 
              />
            <div className='videoButtonArea'>
              <button className="videoButton" onClick={() => setOpen(true)}>
                <Image src='/Images/svg/playButton.svg' width={90} height={90} alt='Play Button' />
              </button>
            </div>
          </div>
        </div>
        <div className='videoSectionBottom'>
          <div className='container'>
            <div className='videoSectionBottomItems'>
              <div className='videoSectionBottomItem'>
                <Image src='/Images/svg/iconVideo.svg' width={50} height={55} alt='Download App' />
                <div className='videoSectionBottomItemDescription'>
                  <h6>DOWNLOAD APP</h6>
                  <h4>2184</h4>
                </div>
              </div>
              <div className='videoSectionBottomItem'>
                <Image src='/Images/svg/iconVideo2.svg' width={50} height={50} alt='Active Account' />
                <div className='videoSectionBottomItemDescription'>
                  <h6>ACTIVE ACCOUNT</h6>
                  <h4>1678</h4>
                </div>
              </div>
              <div className='videoSectionBottomItem'>
                <Image src='/Images/svg/iconVideo3.svg' width={57} height={55} alt='Happy Clients' />
                <div className='videoSectionBottomItemDescription'>
                  <h6>HAPPY CLIENTS</h6>
                  <h4>1845</h4>
                </div>
              </div>
              <div className='videoSectionBottomItem'>
                <Image src='/Images/svg/iconVideo4.svg' width={56} height={50} alt='Solution Problem' />
                <div className='videoSectionBottomItemDescription'>
                  <h6>SOLUTION PROBLEM</h6>
                  <h4>1178</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
