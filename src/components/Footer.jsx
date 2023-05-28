import React from 'react'

export default function Footer() {
  return (
    <footer className='pt-10 bg-bg-footer '>
        <div className='flex justify-center h-full'>
            <div className='w-1440'>
                <div className='flex justify-evenly  flex-wrap'>
                    <div className='max-w-xs flex flex-col gap-4'>
                        <img src='https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638ecdd98ce65fc3a572f295_fft-logo.svg' alt='logo' className='w-64' />
                        <h3>Providing free Figma templates and
                            resources for your every need.
                        </h3>
                        <span>©2022 Free Figma Templates</span>
                    </div>
                    <div className='flex gap-10 text-xs'>
                        <nav>
                            <ul className='flex flex-col gap-2'>
                                <p className='font-bold text-textBlack'>Rosources</p>
                                <a href='https://medium.com/@freefigmatemplates' className='text-colorButtonHover'>Medium</a>
                                <a href='https://www.tiktok.com/@freefigmatemplates' className='text-colorButtonHover'>TikTok</a>
                                <a href='#website'>Websites Designs</a>
                                <a href='#mobile'>Mobile Apps & Mobile Interfaces</a>
                                <a href='#wireframes'>Wireframes & Userflows</a>
                                <a href='#illustrations'>Illustrations & Icons</a>
                            </ul>
                        </nav>
                        <nav>
                            <ul className='flex flex-col gap-2'>
                                <p className='font-bold text-textBlack'>Legals</p>
                                <a href='#welcome'>Contact Us</a>
                                <a href='#welcome'>Terms & Conditions</a>
                                <a href='#welcome'>Privacy Policy</a>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-gray-900 text-white text-center mt-5 py-1'>Landing Page Clonada de <a className='text-colorButtonHover' href='https://www.freefigmatemplates.com/' target='_blank'>freefigmatemplates</a></div>

    </footer>
  )
}
