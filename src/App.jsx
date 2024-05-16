import { useEffect, useState } from 'react'
import './App.css'
import Bodypart from './components/Bodypart'
import About from './components/About'
import img1 from './assets/html.png'
import img2 from './assets/css.png'
import img4 from './assets/bs.png'
import img3 from './assets/js.png'
import img5 from './assets/git1.png'
import img6 from './assets/react.png'
import img7 from './assets/redux.png'
import img8 from './assets/jq.png'
import img9 from './assets/c.png'
import img10 from './assets/mdb.png'
import img11 from './assets/node.png'
import img12 from './assets/figma.png'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import NavStick from './components/NavStick'


function App() {

  return (
    <>
      <Bodypart/>
      <marquee className='m1' behavior="" direction="left">HTML5-CSS-JAVASCRIPT-REACTJS-REDUX-JQUERY-API-MONGOOSE-MONGODB-NODEJS-EXPRESS-ANGULAR-C++-C-SQL-RESPONSIVE DESIGN-HOOKS-UI-GIT-GITHUB-HTML5-CSS-JAVASCRIPT-REACTJS-REDUX-JQUERY-API-MONGOOSE-MONGODB-NODEJS-EXPRESS-ANGULAR-C++-C-SQL-RESPONSIVE DESIGN-HOOKS-UI-GIT-GITHUB-HTML5-CSS-JAVASCRIPT-REACTJS-REDUX-JQUERY-API-MONGOOSE-MONGODB-NODEJS-EXPRESS-ANGULAR-C++-C-SQL-RESPONSIVE DESIGN-HOOKS-UI-GIT-GITHUB</marquee>
      {/* <NavStick/> */}
      <About/>
      <div className='marquee d-flex justify-content-evenly pt-4'>
        <div className='track'>
          <img src={img1} style={{width:'8%',height:'100px'}} alt="" /> 
          <img src={img2}  style={{width:'10%',height:'100px'}} alt="" />
          <img src={img3} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img4} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img5} style={{width:'10%',height:'80px'}} alt="" />
          <img src={img6} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img7} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img8} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img9} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img10} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img11} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img12} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img1} style={{width:'8%',height:'100px'}} alt="" /> 
          <img src={img2}  style={{width:'10%',height:'100px'}} alt="" />
          <img src={img3} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img4} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img5} style={{width:'10%',height:'80px'}} alt="" />
          <img src={img6} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img7} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img8} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img9} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img10} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img11} style={{width:'10%',height:'100px'}} alt="" />
          <img src={img12} style={{width:'10%',height:'100px'}} alt="" />
        </div>

      </div>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App
