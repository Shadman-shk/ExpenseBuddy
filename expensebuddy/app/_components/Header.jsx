import Image from 'next/image'
import React from 'react'
import { Button } from '@base-ui/react'

function Header() {
  return (
    <div className="p-5 flex justify-between item-center border shadow-sm">
       <Image src={'./logo.svg'}
       alt='logo'
       width={120}
       height={100}
       ></Image>
       <Button>Get Started</Button>

    </div>
  )
}

export default Header
