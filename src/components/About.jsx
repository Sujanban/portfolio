import React from 'react';
import profile from '../images/profile.png'
import { BiRightArrow } from "react-icons/bi";

export const About = () => {
  return (
    <div className='bg-bgmain'>
      <div className='max-w-[1600px] m-auto'>
        <div className='max-w-[1000px] m-auto p-[25px] sm:p-[50px] md:p-[10%] lg:p-[50px] xl:p-[0px] lg:flex'>
          <div className='text-colorsecondary flex-1'>
            <li className='flex items-center justify-start'>
              <h2 className='text-colorprimary text-2xl font-bold'><span className='text-neon'>01. </span>About Me</h2>
              {/* <span className='m-8 h-[1px] w-[40%] bg-slate-500'></span> */}
            </li>
            <p className='py-4'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
            <p className='py-2'>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
            <p className='py-2'>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
            <p className='py-2'>Here are a few technologies I’ve been working with recently:</p>
            <ul className='grid-cols-2 grid py-2'>
              <li  className='flex items-center py-2'><BiRightArrow className='text-neon text=sm'/>HTML</li>
              <li  className='flex items-center py-2'><BiRightArrow  className='text-neon text-sm'/> CSS</li>
              <li  className='flex items-center py-2'><BiRightArrow  className='text-neon text-sm'/> Tailwind</li>
              <li  className='flex items-center py-2'><BiRightArrow  className='text-neon text-sm'/> React Js</li>
              <li  className='flex items-center py-2'><BiRightArrow  className='text-neon text-sm'/> Javascript (ES6+)</li>
              <li  className='flex items-center py-2'><BiRightArrow  className='text-neon text-sm'/> Wordpress</li>
            </ul>
          </div>

          <div className=' m-auto py-8 md:p-0 flex-1'>
            <div className='mt-8 lg:mt-0 w-[300px] h-[350px] m-auto relative border-neon border-2 rounded'>
              <img className=' absolute w-[300px] bottom-4 right-4 rounded grayscale bg-neon transition duration-200 ease-in-out hover:grayscale-0 hover:bg-green-hover' src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
