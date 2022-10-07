import React, { useState } from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiCodepen, FiInstagram } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export const Sidebar = () => {
    const [status, setStatus] = useState(false);
    const darkMode = () => {
        setStatus(state => !state);
        console.log('btn clicked ' + status)
    }
    return (
        <div className='fixed top-[20%] right-0 z-40'>
            <div className='flex items-start rounded '>
                <li className='list-none p-0 bg-slate-800 text-neon rounded-l'><IoIosArrowBack className='text-3xl p-0' onClick={darkMode} /></li>
                <li className={`${status ? 'grid transition duration-200 ease-in' : 'hidden'}  list-none`}>
                    <div className='grid '>
                        <button className='p-2 text-xl bg-slate-800 text-white '><BsSunFill /></button>
                        <button className='p-2 text-xl bg-slate-800 text-[#FEA400] rounded-b'><BsMoonFill /></button>
                    </div>
                </li>
            </div>
            <div data-aos="zoom-in" data-aos-delay="1050" className='p-2 pb-0 hidden md:flex fixed bottom-0 left-5 xl:left-10 w-10 items-center justify-center text-colorsecondary'>
                <ul className=''>
                    <li className=''><a className='text-xl hover:text-neon transtition duration-200 ease-in relative top-0 hover:-top-[5px]' href="#"><FiGithub className='m-4' /></a></li>
                    <li className=''><a className='text-xl hover:text-neon transtition duration-200 ease-in relative top-0 hover:-top-[5px]' href=""><FiInstagram className='m-4' /></a></li>
                    <li className=''><a className='text-xl hover:text-neon transtition duration-200 ease-in relative top-0 hover:-top-[5px]' href=""><FiTwitter className='m-4' /></a></li>
                    <li className=''><a className='text-xl hover:text-neon transtition duration-200 ease-in relative top-0 hover:-top-[5px]' href=""><FiLinkedin className='m-4' /></a></li>
                    <li className=''><a className='text-xl hover:text-neon transtition duration-200 ease-in relative top-0 hover:-top-[5px]' href=""><FiCodepen className='m-4' /></a></li>
                    <li className='mt-4 w-1 h-20 bg-colorsecondary m-auto'></li>
                </ul>
            </div>
            <div data-aos="zoom-in" data-aos-delay="1150" className='p-2 pb-0 hidden md:flex fixed bottom-0 right-5 xl:right-10 w-10 items-center justify-center text-colorsecondary'>
                <ul className=''>
                    <li className='relative rotate-90 mb-28 '><a className=' hover:text-neon mb-40 transtition duration-200 ease-in relative left-0 hover:-left-[5px] m-4 text-sm' href="mailto:bansujan@gmail.com">bansujan@gmail.com</a></li>
                    <li className='mt-4 w-1 h-20 bg-colorsecondary m-auto'></li>
                </ul>
            </div>
        </div>
    )
}
