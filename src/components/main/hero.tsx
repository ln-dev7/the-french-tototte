import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen w-full relative'>
        <video autoPlay muted loop className='w-full h-full object-cover absolute inset-0'>
            <source src='/banner-video.mp4' type='video/mp4' />
        </video>
    </div>
  )
}
