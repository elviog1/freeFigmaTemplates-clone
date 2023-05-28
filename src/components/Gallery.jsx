import React from 'react'
export default function Gallery() {
  return (
    <section id='welcome' className=' flex justify-center'>
        <div className='flex flex-wrap max-w-7xl gap-5 justify-center'>
            <div className=''>
                <h1 className='text-4xl text-textBlack font-semibold max-w-sm mb-3 py-5'>Design stunning websites and apps with our free Figma Templates</h1>
                <h2 className='max-w-xs'>We showcase only the highest quality free Figma website templates, mobile App templates, UI kits, Design Systems and 2D and 3D illustrations, all hand picked. Did we mention they're completely free?</h2>
                <div className='rounded-full shadow-2xl my-5 h-14 w-56 bg-colorButton flex justify-center items-center hover:bg-colorButtonHover hover:-translate-y-2 duration-300'>
                    <a 
                    className='px-4 py-2  text-white font-semibold gallery'
                    href="#gallery"
                    >Browse Gallery</a>
                </div>
            </div>
            <div className='h-96 max-w-none'>
                <img className='w-full h-auto' src='https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/643be7f4bfd19588297531af_desk%203d%20tabletop%20designer-p-500.png' alt='banner' />
                <div className='flex'>
                    <img className='hidden md:block relative bottom-72 -z-10' src='https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d66e22e5f78fbd16f7e40_circle01.svg' alt='circle' />
                    <img className='hidden md:block relative bottom-96 pt-9 right-20 -z-10' src='https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d66e295fb436f5250d9a8_circle02.svg' alt='circle' />
                </div>
            </div>
        </div>
    </section>
  )
}
