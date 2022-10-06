import React from 'react'

export const Contact = () => {
  return (
    <div className='bg-bgmain text-colorsecondary'>
        <div className=' max-w-[1000px] m-auto text-center p-[25px] sm:p-[50px] md:p-[10%] lg:p-[50px] xl:px-[0px]  py-[10%] lg:py-[10%]'>
            <h3 className='p-4 text-neon '>04. What's Next</h3>
            <h1 className='p-4 text-5xl font-bold text-colorprimary'>Get Tn Touch</h1>
            <p  className='pb-8 pt-4'>I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <a className= 'transtition duration-200 ease-in text-neon hover:bg-green-hover border-neon rounded border p-4' href="">Say Hello</a>
        </div>
    </div>
  )
}
