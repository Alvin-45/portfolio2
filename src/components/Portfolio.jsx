import React from 'react'
import img1 from '../assets/snapgram.png'
import img2 from '../assets/cboat.png'
import img3 from '../assets/nike.png'
import img4 from '../assets/interior.png'
import img5 from '../assets/atmosview.png'
import img6 from '../assets/netflix.png'

function Portfolio() {
  return (
    <>
    <div className="portfolio pt-2 w-100" id='portfolio'>
    <h5 className="text-center fw-bolder text-light abh">
        <i id='i5' className="fa-solid fa-caret-left  arrow"></i><span className='abhead'>MY PORTFOLIO</span><i id='i6' className="fa-solid fa-caret-right  arrow"></i>
        </h5>
    <div className="projects p-5" style={{width:''}} >
        <div className='d-flex justify-content-around align-items-center w-100 projectpart'>
            <div className='w-100'>
                <div className="outerpart me-5">
                    <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                        <h4 className="text-light text-center pt-5">Snapgram(A social media Application)</h4>
                        <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                            <a href='https://snapgramlite.netlify.app/' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                            <a href='https://github.com/Alvin-45/snapgram' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="b2">
                        <img src={img1} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
           <div >
                <div className="outerpart me-5">
                    <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                        <h4 className="text-light text-center  pt-5">ChatBoat(A Real time chat Application)</h4>
                        <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                            <a href='https://chat-boat-olive.vercel.app/' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                            <a href='https://github.com/Alvin-45/ChatBoat' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="b2">
                        <img src={img2} className='img-fluid' style={{width:'100%',height:'300px'}} alt="" />
                    </div>
                </div>
           </div>
            <div>
                <div className="outerpart me-5">
                    <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                        <h4 className="text-light text-center pt-5">Nike Website With Google Authentication</h4>
                        <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                            <a href='https://nikeweb-googlelogin.vercel.app/' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                            <a href='https://github.com/Alvin-45/Nikeweb-googlelogin' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="b2">
                        <img src={img3} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="outerpart me-5">
                    <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                        <h4 className="text-light text-center pt-5">Interno:Interior Designing Company Website (Using Figma Template)</h4>
                        <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                            <a href='https://interno-zeta.vercel.app/' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                            <a href='https://github.com/Alvin-45/interno' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="b2">
                        <img src={img4} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="outerpart me-5">
                    <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                        <h4 className="text-light text-center pt-5">ATMOSVIEW (A weather tracking(realtime) using API and news platform)</h4>
                        <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                            <a href='https://atmosview.vercel.app/index.html' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                            <a href='https://github.com/Alvin-45/atmosview' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="b2">
                        <img src={img5} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="outerpart" >
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">Disney+Hotstar clone Using HTML,CSS</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://hotstarclone-gules.vercel.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/hotstarclone' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img6} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
        
        </div>
    </div>
    </div>
    </>
  )
}

export default Portfolio