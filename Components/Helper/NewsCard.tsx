import { TagIcon } from '@heroicons/react/20/solid';
import { CalendarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react'

interface Props {
  image: string;
  title: string;
  // tags: string;
}

const NewsCard = ({ title, image }: Props) => {
  return (
    <>
      <div data-aos="zoom-in" data-aos-delay="400" className='col-span-2'>
        <Image width={300} height={200} src={`${image}`} alt={`${title}`} className='w-full h-full' />
      </div>
      <div className='col-span-4'>
        <h1 className='text-[22px] mb-[1rem] text-white capitalize'>
          {title}
        </h1>
        <div className='flex mb-[0.4rem] items-center space-x-2'>
          <CalendarIcon className='w-[1rem] h-[1rem] text-white opacity-85' />
          <p className='text-gray-500 opacity-85 font-thin text-[14px]'>
            July 06, 2024
          </p>
        </div>
        <div className='flex mb-[0.4] items-center space-x-2'>
          <TagIcon className='w-[1rem] h-[1rem] text-white opacity-85' />
          <p className='text-gray-500 opacity-85 font-thin text-[14px]'>
            Moba, Shooting, Game, News
          </p>
        </div>
        <div className='text-white mb-[1rem]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem est ut incidunt, deleniti repellat facilis
          delectus nesciunt molestias, labore, rem nemo ea neque fugiat! Amet nisi consequuntur error esse odit?
        </div>
        <button className='before:ease bg-white text-[17px] relative h-12 w-40 overflow-hidden border
                border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48
                before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-blue-800 before:trasntion-all
                before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180'>
                    <span className='relative z-10'>Read More</span>
                </button>
      </div>
    </>
  )
}

export default NewsCard