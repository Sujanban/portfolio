import React from 'react';
import { BiRightArrow } from "react-icons/bi";

export const Work = () => {
  return (
    <div className='bg-bgmain text-colorsecondary'>
      <div className='max-w-[1600px] m-auto'>
        <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className='max-w-[1000px] m-auto p-[25px] sm:p-[50px] md:p-[10%] lg:p-[50px] xl:px-[0px]  py-[10%] lg:py-[10%]'>
          <li className='flex items-center justify-start'>
            <h2 className='text-colorprimary text-xl md:text-2xl font-bold'><span className='text-neon'>02. </span>Where I've Worked</h2>
          </li>
          <div className='py-8 sm:grid sm:grid-cols-[1fr_5fr] gap-2'>
            <div className='flex sm:flex sm:flex-col items-center mb-4'>
              <li className='list-none my-4 sm:w-full'>
                <a className='transtition duration-200 ease-in w-full p-4 text-sm text-neon hover:bg-slate-700 border-b-4 sm:border-b-0 sm:border-l-4 border-neon' href="">Okayjourney</a>
              </li>
              <li className='list-none my-4 sm:w-full'>
                <a className='transtition duration-200 ease-in w-full p-4 text-sm hover:text-neon hover:bg-slate-700 ' href="/">TBD...</a>
              </li>
            </div>
            <div>
              <h2 className='text-colorprimary text-lg'>Frontend Developer <a className='text-neon' href="">@ Okayjourney</a></h2>
              <p className='py-2 text-sm'>August - December 2022</p>
              <li className=' py-2 px-4 text-sm'>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>
              <li className=' py-2 px-4 text-sm'>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
              <li className=' py-2 px-4 text-sm'>Optimized Site Performance and by managing the resources used. </li>
              <li className=' py-2 px-4 text-sm'>Improved the website indexing on the different search engine like Google, Bing, etc. </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
