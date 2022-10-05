import React from 'react';
import  logo  from "../images/logo.png";
import  logoBig  from "../images/logo-512.png";
import { RiBarChartHorizontalLine } from "react-icons/ri";

export const Navbar = () => {
    return (
        <nav className='flex fixed relative px-12 h-[10vh] justify-between items-center bg-bgmain text-colorprimary text-sm'>
            <div>
                <a className='text-3xl text-neon flex items-center justify-center' href="">
                    <img className='w-12' src={logoBig} alt="" />
                </a>
            </div>
            <ul className='hidden md:flex '>
                <li className='p-2 hover:text-neon'><a className='p-2 text-[13px]' href=''><span className='text-neon'>01. </span>About</a></li>
                <li className='p-2 hover:text-neon' ><a className='p-2 text-[13px]' href=''><span className='text-neon'>02. </span>Experiance</a></li>
                <li className='p-2 hover:text-neon' ><a className='p-2 text-[13px]' href=''><span className='text-neon'>03. </span>Work</a></li>
                <li className='p-2 hover:text-neon' ><a className='p-2 text-[13px]' href=''><span className='text-neon'>04. </span>Contact</a></li>
                <li className='p-2' ><a className='transtition duration-200 ease-in py-2 px-4 hover:bg-green-hover text-neon border-neon border rounded' href=''>Resume</a></li>
            </ul>
            <div className='md:hidden'>
                <RiBarChartHorizontalLine className='rotate-180 text-2xl'/>
            </div>
        </nav>
    )
}
