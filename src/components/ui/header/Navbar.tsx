"use client"
import { Pages, Routes } from '@/constants/enums'
import { Menu, Route, XIcon } from 'lucide-react'
import { title } from 'process'
import React, { useState } from 'react'
import Link from '../link'
import { Button, buttonVariants } from '../button'

const Navbar = () => {
    const [openmenue, setOpenmenue] = useState(false)
    const Links = [
        { id: crypto.randomUUID(), href: Routes.MENU, title: "Menue" },
        { id: crypto.randomUUID(), href: Routes.ABOUT, title: "About" },
        { id: crypto.randomUUID(), href: Routes.CONTACT, title: "Contact" },
        { id: crypto.randomUUID(), href: `${Routes.AUTH}/${Pages.LOGIN}`, title: "Login" },
    ]
  return (
    <nav className='flex-1 justify-end flex'>
        <Button
                variant='secondary'
                 size='sm'
                 className='lg:hidden'
                 onClick={() => setOpenmenue(true)} >
                    <Menu className='!w-6 !h-6'/>
        </Button>
        <ul className={`fixed lg:static 
            ${openmenue?'left-0 z-50':'-left-full'}  top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}>
            <Button
                variant='secondary'
                 size='sm'
                 className='lg:hidden absolute top-10 right-10'
                 onClick={() => setOpenmenue(false)} >
                    <XIcon className='!w-6 !h-6'/>
        </Button>
            {Links.map((link) => (
                <li key={link.id}>
                    <Link href={link.href} className={`${
                        link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                        ?`${buttonVariants({size: 'lg'})} !px-8 !rounded-full`:"hover:text-primary transition-colors duration-200"}font-semibold`}>{link.title}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar
