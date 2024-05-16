import React from 'react'
import img from '../assets/about1.png'
import Typewriter from "typewriter-effect";
import img3 from '../assets/badge.png'

function About() {
  return (
    <>
    <div className="about p-5" id="about">
        

        <h5 className="text-center fw-bolder text-light abh">
            <i id='i1' className="fa-solid fa-caret-left  arrow1"></i><span className='abhead'>ABOUT ME</span><i id='i2' className="fa-solid fa-caret-right  arrow"></i>
        </h5>
        <div className="d-flex justify-content-evenly align-items-center mt-5 row">
            <div className="image col-lg-4" >
                <img src={img} className='img-fluid' height={'100%'} alt="" />
                {/* <img className='img-fluid' src="https://www.shutterstock.com/image-photo/digital-technology-software-development-concept-600nw-2111828198.jpg" alt="" /> */}
            </div>
            <div className="abcontent col-lg-7">
                    <div className='d-flex'>
                        <h5 className="text-light d-flex flex-wrap">MY NAME IS ALVIN JOY&nbsp; <span className='text-warning d-flex flex-wrap'>I'M A &nbsp;
                        <Typewriter
                                options={{
                                    strings: [" FRONTEND DEVELOPER", " REACT DEVELOPER", " BACKEND DEVELOPER"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></span></h5>
                    </div>
                    <div className="cont2 d-flex  justify-content-evenly align-items-center mt-3 ">
                        <div className="bg-light rounded" style={{width:'100px'}}>
                            <img src={img3} style={{width:'100%'}} alt="" />
                            
                        </div><span className="text-light ms-2">Focused Ui Developer, Competent In Web Development And Ui Design And Is Highly Efficient In Creating High-Quality Wireframes, Demos And Prototypes Of User Interfaces. Advanced Understanding Of Mobile Platforms. Extremely Detailorientated, Efficient And Organised.</span>
                    </div>
                    <div className="cont2 d-flex  justify-content-evenly align-items-center mt-4">
                        <div className="bg-light rounded" style={{width:'100px'}}>
                            <img src={img3} style={{width:'100%'}} alt="" />
                            
                        </div><span className="text-light ms-2">Focused Ui Developer, Competent In Web Development And Ui Design And Is Highly Efficient In Creating High-Quality Wireframes, Demos And Prototypes Of User Interfaces. Advanced Understanding Of Mobile Platforms. Extremely Detailorientated, Efficient And Organised.</span>
                    </div>
                    <div className="cont2 d-flex  justify-content-evenly align-items-center mt-4">
                        <div className="bg-light rounded" style={{width:'100px'}}>
                            <img src={img3} style={{width:'100%'}} alt="" />
                            
                        </div><span className="text-light ms-2">Focused Ui Developer, Competent In Web Development And Ui Design And Is Highly Efficient In Creating High-Quality Wireframes, Demos And Prototypes Of User Interfaces. Advanced Understanding Of Mobile Platforms. Extremely Detailorientated, Efficient And Organised.</span>
                    </div>
                    

                    <a href="https://drive.google.com/file/d/1ebIAkcbgkaD2kRRhvaO5ntPqKV2Jhpnl/view?usp=drivesdk" target='_blank' download={"Alvin_Joy_Resume.pdf"}><button className="btn1 text-light fw-bolder mt-5" download="../assets/resume.pdf">DOWNLOAD CV</button></a>
                </div>
        </div>
        
    </div>

    </>
  )
}

export default About