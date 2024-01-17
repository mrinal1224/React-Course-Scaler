import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
         <div className='text-white text-2xl text-center w-full bg-gray-900/60 p-4 '>Avengers Endgame</div>
    </div>
  )
}

export default Banner