import React from 'react'
import img1 from '../assets/face.png'
import img2 from '../assets/linkedin.png'
import img3 from '../assets/git.png'
function Footer() {
  return (
    <>
    <div className="footer p-4" id='contact' style={{backgroundColor:'black'}}>
        <div className="fbody d-flex justify-content-around align-items-center ">
        <div className="icons1">
                    <a href='https://www.facebook.com/ALVINJOY2000/' target='_blank'><img src={img1} className='footimg'  alt="" /></a>
                    <a href='https://www.linkedin.com/in/alvin-joy/' target='_blank'><img src={img2}  className='footimg' alt="" /></a>
                    <a href='https://github.com/Alvin-45' target='_blank'><img src={img3}  className='footimg2' alt="" /></a>
                </div>
                <p className="fw-bolder text-light">COPYRIGHT  2024 PORTFOLIO WEBSITE.ALL RIGHTS RESERVED BT AJK.</p>

        </div>
    </div>
    </>
  )
}

export default Footer