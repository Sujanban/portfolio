import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiCodepen, FiInstagram } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { BsSunFill,BsMoonFill } from "react-icons/bs";


export const Sidebar = () => {
    return (
        <div className='fixed top-[20%] right-0 p-2 bg-neon rounded-xl z-40'>
            <div className='flex items-center'>
                <li className='list-none'><IoIosArrowBack className='text-3xl'/></li>
                {/* <li className='list-none'>
                        <button className='p-2 text-xl text-white'><BsSunFill/></button>
                        <button className='p-2 text-xl'><BsMoonFill/></button>
                </li> */}
            </div>
            <div className='hidden md:flex fixed bottom-0 left-5 xl:left-10 w-10 items-center justify-center text-colorsecondary'>
                <ul className=''>
                    <li className=''><a className='text-xl hover:text-neon transtition duration-200 ease-in relative top-0 hover:-top-[5px]' href="#"><FiGithub className='m-4'/></a></li>
                    <li className=''><a className='text-xl hover:text-neon transtition duration-200 ease-in relative top-0 hover:-top-[5px]' href=""><FiInstagram className='m-4'/></a></li>
                    <li className=''><a className='text-xl hover:text-neon transtition duration-200 ease-in relative top-0 hover:-top-[5px]' href=""><FiTwitter className='m-4'/></a></li>
                    <li className=''><a className='text-xl hover:text-neon transtition duration-200 ease-in relative top-0 hover:-top-[5px]' href=""><FiLinkedin className='m-4'/></a></li>
                    <li className=''><a className='text-xl hover:text-neon transtition duration-200 ease-in relative top-0 hover:-top-[5px]' href=""><FiCodepen className='m-4'/></a></li>
                    <li className='mt-4 w-1 h-20 bg-colorsecondary m-auto'></li>
                </ul>
            </div>
            <div className='hidden md:flex fixed bottom-0 right-5 xl:right-10 w-10 items-center justify-center text-colorsecondary'>
                <ul className=''>
                    <li className='relative rotate-90 mb-28 '><a className=' hover:text-neon mb-40 transtition duration-200 ease-in relative left-0 hover:-left-[5px] m-4 text-sm' href="mailto:bansujan@gmail.com">bansujan@gmail.com</a></li>
                    <li className='mt-4 w-1 h-20 bg-colorsecondary m-auto'></li>
                </ul>
            </div>
        </div>
    )
}
