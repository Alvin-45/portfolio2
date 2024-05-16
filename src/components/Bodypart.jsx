import React from 'react'
import Navpart from './Navpart'
import img1 from '../assets/face.png'
import img2 from '../assets/linkedin.png'
import img3 from '../assets/git.png'
import Typewriter from "typewriter-effect";


function Bodypart() {
  return (
    <>
    <div className="fullbody" id='home'>
        <Navpart/>
        <div className="d-flex justify-content-evenly align-items-center ps-5 pe-5 flex-wrap bdy2" style={{paddingTop:'190px'}}>
            <div className='d-flex justify-content-start align-items-start flex-column bcnt1'>
                <h1 className="fw-bolder text-light">
                    HI I'AM
                </h1>
                <h1 className="fw-bolder name">
                   ALVIN JOY
                </h1>
                <div className='d-flex '>
                    <p className="text-light fw-bolder">I'M A :</p>
                    <span className='name2 fw-bolder'>
                    <Typewriter
                            options={{
                                strings: ["FRONTEND DEVELOPER", "REACT DEVELOPER", "BACKEND DEVELOPER"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>

                </div>
                <p className="text-light text-justify bintro fw-bolder">I Work In Front-End Web Development, And I Have Experience In Dealing With Programming And Modern Web Technologies, And I Have Built A Lot Of f Projects That Have Increased My Experience And Trained A Lot, I Am A Fast Learner And Always Love To Develop Myself. </p>
                <div className="icons">
                    <a href='https://www.facebook.com/ALVINJOY2000/' target='_blank'><img src={img1} style={{width:'15%'}} alt="" /></a>
                    <a href='https://www.linkedin.com/in/alvin-joy/' target='_blank'><img src={img2} style={{width:'15%'}} alt="" /></a>
                    <a href='https://github.com/Alvin-45' target='_blank'><img src={img3} style={{width:'20%'}} alt="" /></a>
                </div>

            </div>
            <img className='img-fluid bimg' src="https://www.bigscal.com/wp-content/uploads/2024/02/Frontend-Development-Services-714x430.webp" alt="" />
        </div>
    </div>
    </>
  )
}

export default Bodypart