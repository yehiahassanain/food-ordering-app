import { Route } from 'lucide-react'
import  Link  from '../link'
import React from 'react'
import { Routes } from '@/constants/enums'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='py-4 md:py-6'>
      <div className='container flex items-center justify-between '>
        <Link href={Routes.ROOT} className='text-primary text-2xl font-semibold'>🍕 Pizza</Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
