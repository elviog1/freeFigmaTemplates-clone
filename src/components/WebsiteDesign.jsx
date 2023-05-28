import React from 'react'
import CardWebsite from './CardWebsite'
import { Link } from 'react-router-dom'
export default function WebsiteDesign({website,title,id}) {
  return (
    <section id={id} className='flex my-5 justify-center'>
        <div className='mx-auto w-1440'>
            <h2 className='text-textBlack text-center text-2xl font-semibold my-3'>{title}</h2>
            <div className='flex gap-10 justify-center flex-wrap'>
                <CardWebsite arrayWebsite={website} />
            </div>
            <div className='flex justify-center my-5'>
              <div className='text-white w-full'>
                <div className='h-px bg-gray-300 w-full relative top-5 -z-10'></div>
                <div className='flex justify-center'>
                  <div className='rounded-full w-56 bg-white border border-gray-300 flex justify-center items-center hover:bg-colorButtonHover hover:border-colorButtonHover'>
                    <Link className=' w-full py-2 text-center hover:text-white text-colorButton font-medium'>View All</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
