import React from 'react'
import WebsiteDesign from './WebsiteDesign'

export default function Templates() {
    const arrayWebsite = [
        {id:1,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/64694741f827d694b21d9301_thumbnail%20software%20website%20template.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'Software Business Web Design'},
        {id:2,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/645f81adcd6a0badffa8ed2f_AI%20content%20app%20thumbnail.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'AI Creator App'},
        {id:3,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/64572de5edf9271206c6ee40_Email%20Design%20Maker%20thumbnail.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'Email Template Creator'},
      ]
    const arrayMobileApps = [
        {id:1,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/6471f379651cee234df90e05_watch%20and%20mobile%20UI%20template%20thumbnail.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'Software Business Web Design'},
        {id:2,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/64658ed448d566b49ca51b07_ServiceNow%20Mobile%20Template%20thumbnail.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'AI Creator App'},
        {id:3,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/645b81ca205bc7c1ac452fb7_supermarket%20app%20design%20thumbnail.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'Email Template Creator'},
      ]
    const arrayIllustrations = [
        {id:1,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/646f59cd9ff0d7324befcb42_doodles%20free%20Figma.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'Software Business Web Design'},
        {id:2,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/645f30f002edee1b703cf16d_Mega%20Icons%20Pack%20thumbnail.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'AI Creator App'},
        {id:3,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/6455d67dfd072107d627e43c_2D%20Illustrations%20Superpack%20thumbnail.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'Email Template Creator'},
      ]
    const arrayWireframes = [
        {id:1,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/645259ed17c5a728cbd55d53_Relume%20Wireframe%20thumbnail.png',text:'Software Business Web Design'},
        {id:2,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/643aa66d458127d30ccd7f73_sample%20wireframe%20thumbnail%20kit2.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'AI Creator App'},
        {id:3,img1:'https://uploads-ssl.webflow.com/600b6ab92506fd10a1ca3f8a/64354a9ddeec6ac252542f46_Tetrisly%20Design%20System%20thumbnail.png',img2:'https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638d71322a2fb844da191a20_learnmore.svg',text:'Email Template Creator'},
      ]
  return (
    <section id='gallery'>
        <WebsiteDesign id='website' website={arrayWebsite} title={"Website Designs"} />
        <WebsiteDesign id='mobile' website={arrayMobileApps} title={"Mobile Apps & Mobile Interfaces"} />
        <WebsiteDesign id='illustrations' website={arrayIllustrations} title={"Illustrations and Icons"} />
        <WebsiteDesign id='wireframes' website={arrayWireframes} title={"Wireframes and Design Systems"} />
    </section>
  )
}
