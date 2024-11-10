import React from 'react'
import Navbar from './navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/logo.png)] bg-left lg:bg-[15%] bg-cover' 
style={{backgroundSize:"40%" , backgroundPosition:"left 100px top 100px"}}
><Navbar/>
<div className='container grid lg:grid-cols-2 h-[calc(100vh-60ox)]'>
  <div className='hidden lg:block'></div>
  <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
  
     <div>
     <p>WELLCOME</p>
<p>TO</p>
<p>MANAL'S</p>
<p>ACADEMY</p>
    </div>
    </div>
    </div>





    <h2 className='text-1xl md:text-1xl font-bold leading-tight flex justify-center items-center' >MOTIVE:</h2>
        <p className='text-white-500 pt-4' >I am a subject teacher for secondary classes. Teaching is my profession and passion.
            My first priority is my student and their concerned about subject. I started this academy for two years. The progress of our students as we observe in area . 
        </p>
        <h2>Subjects</h2>
        <p><b><u>English</u></b></p>
        <p><b><u>History</u></b></p>
        <p><b><u>Physics</u></b></p>
        <p><b><u>Chemistry</u></b></p>
        <p><b><u>Mathematics</u></b></p>

        <p>Our today students , tomorrow shining star.</p>
    </div>
  )
}

export default Hero