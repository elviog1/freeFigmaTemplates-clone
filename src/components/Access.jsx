import React from 'react'
import CardAccess from './CardAccess'

export default function Access() {
    const arrayCards = [
        {id:1,img:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d66f59bf1383806f12bfe_Websites%20%26%20App%20Interfaces.svg',text:'Responsive Website Design Templates' },
        {id:2,img:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/6396aee0eaa1f2d47f2fd708_mobile-assets.svg',
    text:'Mobile Apps and Mobile Interfaces'},
        {id:3,img:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/6396ae7176a0d288ec75fed2_icons-and-assets.svg',text:'Illustrations, Icons and 3D Renders' },
        {id:4,img:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d66f5346ec77de69d8b92_Wireframes%20%26%20Design%20Systems.svg',text:'Wireframes and Design Systems' },
    ]
  return (
    <section className='flex'>
        <div className='mx-auto'>
            <h2 className='text-2xl text-textBlack font-semibold text-center my-2'>What You Can Access</h2>
            <p className='text-textBlack text-center'>Our free Figma templates are divided into assorted sections.</p>
        <div className='my-5 flex gap-5 flex-wrap justify-center'>
            <CardAccess arrayCards={arrayCards} />
        </div>
        </div>
    </section>
  )
}
