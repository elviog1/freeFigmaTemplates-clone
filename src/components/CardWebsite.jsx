import React from 'react'

export default function CardWebsite({arrayWebsite}) {
  const printCard= (infoCard)=>(
    <div className="w-72 hover:text-colorButtonHover cursor-pointer" key={infoCard.id}>
      <div className="relative ">
        <img className="w-72 rounded-xl hover:opacity-75 transition-opacity duration-300" src={infoCard.img1} alt="card-img website" />
        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 opacity-0 hover:opacity-100 transition-opacity duration-300" src={infoCard.img2} alt="card-img website" />
      </div>
      <p className='text-center text-textBlack font-medium py-1 hover:text-colorButton'>{infoCard.text}</p>
    </div>
  )
  return (
    <>
      {arrayWebsite.map(printCard)}
    </>
  )
}
