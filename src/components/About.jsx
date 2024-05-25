import React from 'react';
import profile from '../images/sujanban-frontend-developer.webp'
import { BiRightArrow } from "react-icons/bi";

export const About = () => {
  return (
    <div id='about' className='bg-bgmain'>
      <div className='max-w-[1600px] m-auto'>
        <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className='max-w-[1000px] m-auto p-[25px] sm:p-[50px] md:p-[10%] lg:p-[50px] xl:px-[0px]  py-[10%] lg:py-[10%] lg:flex'>
          <div className='text-colorsecondary flex-1'>
            <li className='flex items-center justify-start'>
              <h2 className='text-colorprimary text-xl md:text-2xl font-bold'><span className='text-neon'>01. </span>About Me</h2>
            </li>
            <p className='py-4 text-sm md:text-base'>Hello! My name is Sujan and i am from Itahari,Nepal. I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try creating a college project — turnd out taughing me a lot about HTML & CSS!</p>
            <p className='py-2 text-sm md:text-base'>Fast-forward to today, and I’ve had the privilege of working at an travel ticket booking agency, a start-up, a huge corporation, and a student-led idea. My main focus these days is building accessible, inclusive interface and digital experiences at okayjourney for daily users.</p>
            <p className='py-2 text-sm md:text-base'>Here are a few technologies I’ve been working with recently:</p>
            <ul className='grid-cols-2 grid py-2'>
              <li className='flex items-center py-2 text-sm'><BiRightArrow className='text-neon text=sm' />HTML</li>
              <li className='flex items-center py-2 text-sm'><BiRightArrow className='text-neon text-sm' /> CSS</li>
              <li className='flex items-center py-2 text-sm'><BiRightArrow className='text-neon text-sm' /> Tailwind</li>
              <li className='flex items-center py-2 text-sm'><BiRightArrow className='text-neon text-sm' /> React</li>
              <li className='flex items-center py-2 text-sm'><BiRightArrow className='text-neon text-sm' /> Javascript</li>
              <li className='flex items-center py-2 text-sm'><BiRightArrow className='text-neon text-sm' /> Wordpress</li>
            </ul>
          </div>

          <div className=' m-auto py-8 md:p-0 flex-1'>
            <div className='mt-8 lg:mt-0 w-[200px] h-[250px] sm:w-[300px] sm:h-[350px] m-auto relative border-neon border-2 rounded'>
              <div className='bg-[#60EBCD] w-[200px] h-[250px] sm:w-[300px] sm:h-[350px] bottom-4 right-4 absolute rounded hover:bg-colorprimary'>
                <img className='opacity-80 object-cover w-[200px] h-[250px] sm:h-[350px] sm:w-[300px] bottom-4 right-4 rounded transition duration-200 ease-in-out hover:opacity-100 hover:bg-green-hover' src={profile} alt="Sujan Ban - Frontend Developer" />
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
