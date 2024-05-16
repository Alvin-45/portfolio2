import React from 'react'
import img1 from '../assets/html.png'
import img2 from '../assets/css.png'
import img4 from '../assets/bs.png'
import img3 from '../assets/js.png'
import img5 from '../assets/git1.png'
import img6 from '../assets/react.png'
import img7 from '../assets/redux.png'
import img8 from '../assets/jq.png'
import img9 from '../assets/c.png'
import img10 from '../assets/mdb.png'
import img11 from '../assets/node.png'
import img12 from '../assets/figma.png'
function Skills() {
  return (
    <>
    <div className="skills" id='skills' style={{overflowX:'hidden',position:'relative'}}>
        <div className='d-flex justify-content-between align-items-center  p-5 text-center w-100'>
            {/* <img src="https://i.pinimg.com/originals/cd/8a/2d/cd8a2df3534127f660734a9c2053b7b3.gif" alt="" style={{marginLeft:'-250px'}}/> */}
            <h5 className="text-center fw-bolder text-light w-100 d-flex abh skillh"><i id='i3' className="fa-solid fa-caret-left arrow mt-2"></i><span className='abhead '>SKILLS</span><i id='i4' className="fa-solid fa-caret-right arrow mt-2"></i></h5>
            <img src="https://i.pinimg.com/originals/cd/8a/2d/cd8a2df3534127f660734a9c2053b7b3.gif" className='skillcircle' alt=""/>
        </div>
        <div className='d-flex justify-content-evenly align-items-center  p-5 text-center w-100 flex-wrap'>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4">
                <img src={img1} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4" >
                <img src={img2} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4" >
                <img src={img3} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4" >
                <img src={img4} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4" >
                <img src={img5} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4">
                <img src={img6} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4">
                <img src={img7} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4">
                <img src={img8} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4" >
                <img src={img9} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4">
                <img src={img10} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4" >
                <img src={img11} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
            <div className="boxs1 border rounded text-center ms-2 me-2 mb-4">
                <img src={img12} alt="" className='p-3 m-3' style={{width:'70%',height:'200px'}} />
            </div>
        </div>
        <img src="https://i.pinimg.com/originals/cd/8a/2d/cd8a2df3534127f660734a9c2053b7b3.gif" alt="" style={{marginLeft:'-150px',width:'350px',marginTop:'-70px'}}/>
    </div>
    </>
  )
}

export default Skills