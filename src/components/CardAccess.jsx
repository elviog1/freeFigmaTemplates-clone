import React from 'react'
export default function CardAccess({arrayCards}) {
    const printCard = (cardInfo)=> (
        <div key={cardInfo.id} className='w-56 flex flex-col items-center bg-cardAccess hover:bg-cardAccessHover duration-500 hover:scale-105 rounded-2xl p-5'>
            <img className='text-white w-40 pb-5' src={cardInfo.img} alt='logo-card' />
        <h3 className='text-center w-40 text-cardAccesstextColor font-semibold'>{cardInfo.text}</h3>
    </div>
    )
  return (
    <>
        {arrayCards.map(printCard)}
    </>
  )
}
