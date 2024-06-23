import React from 'react';
import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { BsAward } from "react-icons/bs";
import { FiFlag } from "react-icons/fi";


const Achievements = () => {
    return (
        <div id='achievements' className='bg-bgmain text-colorprimary '>
            <div className='max-w-[1600px] m-auto flex justify-center'>
                <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className='w-full md:w-[1000px] m-auto p-[25px] sm:p-[50px] md:p-[10%] lg:p-[50px] xl:px-[0px]  py-[10%] lg:py-[10%]'>
                    <li className='flex items-center justify-center'>
                        <h2 className='text-colorprimary text-xl md:text-2xl font-bold'><span className='text-neon'>04. </span>Achievements </h2>
                    </li>
                    <h3 className='p-4 md:px-0 md:py-4 text-neon text-sm md:text-base text-center'>Featured Achievements</h3>
                    {/* <div className='block sm:grid  grid-cols-2 gap-4'>
                        <div className='my-2 p-4 text-colorsecondary rounded bg-bgcard text-sm'>
                            <img className='mx-auto w-[30%] sm:w-auto' src="https://img.icons8.com/external-flatarticons-blue-flatarticons/130/external-award-womens-day-flatarticons-blue-flatarticons.png" alt="external-achievement-womens-day-flatarticons-blue-flatarticons" />
                            <h1 className='py-4  md:px-0 md:py-4 text-lg  font-bold'>IIC Quest 2024</h1>
                            <p className='text-colorsecondary'>Secured 1st Position on IIC Quest 2.0 an intense 36 hours Hackathon organized by Itahari International College.</p>
                        </div>
                        <div className='my-2 p-4 text-colorsecondary rounded bg-bgcard text-sm'>
                            <img className='mx-auto w-[30%] sm:w-auto' src="https://img.icons8.com/external-flatarticons-blue-flatarticons/130/external-achievement-womens-day-flatarticons-blue-flatarticons.png" alt="external-achievement-womens-day-flatarticons-blue-flatarticons" />
                            <h1 className='py-4  md:px-0 md:py-4 text-lg  font-bold'>ACES Techfeast Hackathon 6.0</h1>
                            <p className='text-colorsecondary'>Participated in Nepal's Biggest Hackathon competation organized by Association Of Computer Engineering Students with 30 hours of contimous Coding Sesson.</p>
                            <li className='flex-wrap flex list-none py-4 md:px-0 md:py-4 text-colorsecondary text-sm'> <span className='pl-0 p-2'>PHP</span><span className='p-2'>MySql</span><span className='p-2'>Tailwind CSS</span> </li>
                        </div>
                        <div className='my-2 p-4 text-colorsecondary rounded bg-bgcard text-sm'>
                            <img className='mx-auto  w-[30%] sm:w-auto' src="https://img.icons8.com/external-flatarticons-blue-flatarticons/130/external-award-womens-day-flatarticons-blue-flatarticons.png" alt="external-award-womens-day-flatarticons-blue-flatarticons" />
                            <h1 className='py-4  md:px-0 md:py-4 text-lg font-bold'>Koshi Mini Yantra 2.0</h1>
                            <p className='text-colorsecondary'>Participated in a coding competation organized by Robotics Association of Nepal - Koshi Mini Yantra. We developed a AI chatbot focusing to help farmers to optimize the yield of crops.</p>
                            <li className='flex-wrap flex list-none py-4 md:px-0 md:py-4 text-colorsecondary text-sm'> <span className='py-2'>Python</span> </li>
                        </div>
                    </div> */}

                    <div className='block sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-4'>
                        <div className='my-2 transtition duration-200 ease-in relative top-0 hover:-top-[10px]  hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 md:p-8 text-left' href=''>
                            <div className='flex justify-between items-center py-2'>
                                <BsAward className='text-5xl text-neon' />
                                <a className='hover:text-colorprimary' target='_blank' href="https://www.facebook.com/share/p/mxtPzSqUyXbLY8gv/"><BiLinkExternal className='text-2xl text-colorsecondary' /></a>
                            </div>
                            <h2 className='py-2 font-bold hover:text-neon'>IIC Quest 2024 Winner</h2>
                            <p className='text-sm py-2 text-colorsecondary'>Secured 1st Position on IIC Quest 2.0 an intense 36 hours Hackathon organized by Itahari International College.</p>
                        </div>
                        <div className='my-2 transtition duration-200 ease-in relative top-0 hover:-top-[10px] hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 md:p-8 text-left' href=''>
                            <div className='flex justify-between items-center py-2'>
                                <div>
                                    <FiFlag className='text-5xl text-neon' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    {/* <a href=""><BiLinkExternal className='text-2xl m-2 text-colorsecondary' /></a> */}
                                </div>
                            </div>
                            <h2 className='py-2 font-bold hover:text-neon'>ACES Techfeast Hackathon 6.0</h2>
                            <p className='text-sm py-2 text-colorsecondary'>Participated in Nepal's Biggest Hackathon competation organized by Association Of Computer Engineering Students with 30 hours of contimous Coding Sesson.</p>
                        </div>
                        <div className='my-2 transtition duration-200 ease-in relative top-0 hover:-top-[10px]  hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 md:p-8 text-left' href=''>
                            <div className='flex justify-between items-center py-2'>
                                <FiFlag className='text-5xl text-neon' />
                                {/* <a className='hover:text-colorprimary' target='_blank' href="https://github.com/Sujanban/python_chatbot"><FiGithub className='text-2xl text-colorsecondary' /></a> */}
                            </div>
                            <h2 className='py-2 font-bold hover:text-neon'>Koshi Mini Yantra 2.0</h2>
                            <p className='text-sm py-2 text-colorsecondary'>Participated in a coding competation organized by Robotics Association of Nepal - Koshi Mini Yantra. We developed a AI chatbot focusing to help farmers to optimize the yield of crops.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements