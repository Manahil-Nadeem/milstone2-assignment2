import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='container pt-8'>
    <div className='flex justify-between items-center'>
<div className='text-xl font-medium'>

</div>

<ul className='gap-10 lg:gap-16 hidden md:flex'>

<Link href={"/"}><li className='menuLink'>Home</li></Link>
<Link href={"/Subjects"}><li className='menuLink'>Subjects</li></Link>
<Link href={"/Contact"}><li className='menuLink'>Contact</li></Link>
<Link href={"/About"}><li className='menuLink'>About</li></Link>




</ul>

    </div>

    
</div>
  )
}


export default Navbar