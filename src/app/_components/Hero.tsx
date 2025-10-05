import { Button, buttonVariants } from '@/components/ui/button'
import Link from '@/components/ui/link'
import { Routes } from '@/constants/enums'
import { ArrowRightCircle, Route } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
    <section className='section-gap'>
      <div className='container grid grid-cols-1 md:grid-cols-2'>
        <div className='md:py-12'>
            <h1 className='text-4xl font-bold mb-4'>Slice into Happiness</h1>
            <p className='text-black my-4 opacity-50'>Experience the best pizza in town with our wide variety of toppings and crust options. Order now and enjoy hot, fresh pizza delivered straight to your door.</p>
             <div className='flex gap-3 mt-6 items-center'>
              <Link
              href={`/${Routes.MENU}`}
              className={`${buttonVariants({
                size: 'lg',
              })} space-x-2 !px-4 !rounded-full uppercase`}
            >
              order Now
              <ArrowRightCircle
                className={`!w-5 !h-5`}
              />
            </Link>
            <Link
              href={`/${Routes.MENU}`}
              className='text-lg flex gap-2 items-center text-black hover:text-primary transition-colors duration-200'
            >
              Learn More
              <ArrowRightCircle
                className={`!w-5 !h-5`}
              />
            </Link>
             </div>
        </div>
        <div className='relative hidden md:block'>
            <Image 
             src="/assets/images/pizza.png"
             alt='Pizza-Image' 
             fill  
             loading='eager'
             priority
              className='object-contain'
             />
        </div>
      </div>
    </section>
  )
}

export default Hero
