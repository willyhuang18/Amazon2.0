import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div>
        <div>
            <Image 
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className='cursor-pointer'
            />
        </div>
    </div>
  )
}

export default Header