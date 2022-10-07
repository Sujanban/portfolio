import React, { useState } from 'react';
import logo from "../images/logo.png";
import logoBig from "../images/logo-512.png";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
    const [state, setState] = useState(false);
    const ToggleClass = () => {
        setState(state => !state);
    }
    
    return (
        <div className='bg-bgmain '>
            <nav className='flex px-8 md:px-12 h-[10vh] justify-between items-center bg-bgmain text-colorprimary text-sm '>
                <div>
                    <a className='text-3xl text-neon flex items-center justify-center' href="#">
                        <img className='h-12' src={logoBig} alt="" data-aos="zoom-in"/>
                    </a>
                </div>
                <ul id='nav' className={` ${state?'flex right-0 top-0':' hidden'} right-0 top-0 transition ease md:flex flex w-[300px] sm:w-[400px] md:w-auto bg-bgcard md:bg-transparent fixed md:relative z-50 h-[100vh] md:h-auto flex-col md:flex-row items-center justify-center`}>
                    <li data-aos="fade-down" className='md:hidden absolute top-[4vh] right-8 md:right-12 text-2xl text-neon'><AiOutlineClose  onClick={ToggleClass} /></li>
                    <li data-aos="fade-down" data-aos-delay="50"
                    className='p-2 py-8 hover:text-neon' ><a className='p-2 text-[13px]' href=''><span className='text-neon'>01. </span>About</a></li>
                    <li data-aos="fade-down" data-aos-delay="150"
                    className='p-2 py-8 hover:text-neon' ><a className='p-2 text-[13px]' href=''><span className='text-neon'>02. </span>Experiance</a></li>
                    <li data-aos="fade-down" data-aos-delay="250" className='p-2 py-8 hover:text-neon' ><a className='p-2 text-[13px]' href=''><span className='text-neon'>03. </span>Work</a></li>
                    <li data-aos="fade-down" data-aos-delay="350" className='p-2 py-8 hover:text-neon' ><a className='p-2 text-[13px]' href=''><span className='text-neon'>04. </span>Contact</a></li>
                    <li data-aos="fade-down" data-aos-delay="450" className='p-2 py-8' ><a className='transtition duration-200 ease-in py-2 px-4 hover:bg-green-hover text-neon border-neon border rounded' href=''>Resume</a></li>
                </ul>

                <div className='md:hidden'>
                    <RiBarChartHorizontalLine id='bar' className='rotate-180 text-2xl text-neon' onClick={ToggleClass}/>
                </div>
            </nav>
        </div>
    )
}
