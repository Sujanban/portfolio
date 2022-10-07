import React from 'react';
import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import project1 from "../images/project1.png";

export const Project = () => {
    return (
        <div className='bg-bgmain text-colorprimary '>
            <div className='max-w-[1600px] m-auto flex justify-center'>
                <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className='w-full md:w-[1000px] m-auto p-[25px] sm:p-[50px] md:p-[10%] lg:p-[50px] xl:px-[0px]  py-[10%] lg:py-[10%]'>
                    <li className='flex items-center justify-start'>
                        <h2 className='text-colorprimary text-xl md:text-2xl font-bold'><span className='text-neon'>03. </span>Some Things I’ve Built</h2>
                    </li>
                    <div className='relative py-4 md:py-8 flex items-center my-12'>
                        <div className='w-[60%] bg-[#1C4753] hidden md:block'>
                            <img className=' transition duration-200 ease-in  opacity-[0.2] hover:opacity-100 w-full h-[100%] rounded' src={project1} alt="" />
                        </div>
                        <div className='w-full lg:max-w-[50%] md:max-w-[80%] md:text-end md:absolute bg-bgcard md:bg-transparent md:right-0'>
                            <div className=''>
                                <h3 className='p-4 md:px-0 md:py-4 text-neon text-sm md:text-base'>Featured Project</h3>
                                <a className='p-4 md:px-0 md:py-4 text-xl md:text-2xl font-semibold' href="">Realestate Marketplace</a>
                                <div className='p-4 text-colorsecondary rounded bg-bgcard text-sm'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</div>
                                <li className='flex-wrap flex justify-start md:justify-end list-none p-4 md:px-0 md:py-4 text-colorsecondary text-sm'> <span className='p-2'>Javascript</span><span className='p-2'>PHP</span><span className='p-2'>Laravel</span><span className='p-2'>MySql</span> </li>
                                <p className='p-4 md:px-0 md:py-4 flex text-end md:float-right'><a className='p-2 text-end' href=""><BiLinkExternal className='text-end' /></a><a className='p-2' href=""><FiGithub /></a></p>
                            </div>
                        </div>
                    </div>
                    <div className='relative py-4 md:py-8 flex items-center my-12'>
                        <div className='w-[60%] bg-[#1C4753] md:ml-auto  hidden md:block'>
                            <img className=' transition duration-200 ease-in w-full opacity-[0.2] hover:opacity-100 h-[100%] rounded ml-auto' src={project1} alt="" />
                        </div>
                        <div className='w-full lg:max-w-[50%] md:max-w-[80%] md:text-start md:absolute bg-bgcard md:bg-transparent left-0'>
                            <div className=''>
                                <h3 className='p-4 md:px-0 md:py-4 text-neon text-sm md:text-base'>Featured Project</h3>
                                <a className='p-4 md:px-0 md:py-4 text-xl md:text-2xl font-semibold' href="">Realestate Marketplace</a>
                                <div className='p-4 text-colorsecondary rounded bg-bgcard text-sm'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</div>
                                <li className='flex-wrap flex list-none p-4 md:px-0 md:py-4 text-colorsecondary text-sm'> <span className='p-2'>Javascript</span><span className='p-2'>PHP</span><span className='p-2'>Laravel</span><span className='p-2'>MySql</span> </li>
                                <li className='p-4 md:px-0 md:py-4 list-none flex text-end'><a className='p-2' href=""><BiLinkExternal /></a><a className='p-2' href=""><FiGithub /></a></li>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className='text-center py-8 '>
                        <h1 className='text-xl md:text-2xl font-bold'>Other Noteworthy Projects</h1>
                        <h3 className='text-neon p-4'>view the archive</h3>
                        <div className='block sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-4'>
                            <div className='my-2 transtition duration-200 ease-in relative top-0 hover:-top-[10px]  hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 md:p-8 text-left' href=''>
                                <div className='flex justify-between items-center py-2'>
                                    <AiOutlineFolder className='text-5xl text-neon' />
                                    <a className='hover:text-colorprimary' href=""><FiGithub className='text-2xl text-colorsecondary' /></a>
                                </div>
                                <h2 className='py-2 font-bold hover:text-neon'>Integrating Algolia Search with WordPress Multisite</h2>
                                <p className='text-sm py-2 text-colorsecondary'>Building a custom multisite compatible WordPress plugin to build global search with Algolia
                                </p>
                                <p className='py-2 text-sm text-colorsecondary'><span>Algolia</span><span className='p-2'>Wordpress</span><span>PHP</span></p>
                            </div>
                            <div  className='my-2 transtition duration-200 ease-in relative top-0 hover:-top-[10px] hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 md:p-8 text-left' href=''>
                                <div className='flex justify-between items-center py-2'>
                                    <div>
                                        <AiOutlineFolder className='text-5xl text-neon' />
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <a className='hover:text-colorprimary' href=""><FiGithub className='text-2xl m-2 text-colorsecondary' /></a>
                                        <a href=""><BiLinkExternal className='text-2xl m-2 text-colorsecondary' /></a>
                                    </div>
                                </div>
                                <h2 className='py-2 font-bold hover:text-neon'>Integrating Algolia Search with WordPress Multisite</h2>
                                <p className='text-sm py-2 text-colorsecondary'>Building a custom multisite compatible WordPress plugin to build global search with Algolia
                                </p>
                                <p className='py-2 text-sm text-colorsecondary'><span>Algolia</span><span className='p-2'>Wordpress</span><span>PHP</span></p>
                            </div>
                            <div  className='my-2 transtition duration-200 ease-in relative top-0 hover:-top-[10px]  hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 md:p-8 text-left' href=''>
                                <div className='flex justify-between items-center py-2'>
                                    <AiOutlineFolder className='text-5xl text-neon' />
                                    <a className='hover:text-colorprimary' href=""><FiGithub className='text-2xl text-colorsecondary' /></a>
                                </div>
                                <h2 className='py-2 font-bold hover:text-neon'>Integrating Algolia Search with WordPress Multisite</h2>
                                <p className='text-sm py-2 text-colorsecondary'>Building a custom multisite compatible WordPress plugin to build global search with Algolia
                                </p>
                                <p className='py-2 text-sm text-colorsecondary'><span>Algolia</span><span className='p-2'>Wordpress</span><span>PHP</span></p>
                            </div>
                            <div  className='my-2 transtition duration-200 ease-in relative top-0 hover:-top-[10px] hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 md:p-8 text-left' href=''>
                                <div className='flex justify-between items-center py-2'>
                                    <div>
                                        <AiOutlineFolder className='text-5xl text-neon' />
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <a className='hover:text-colorprimary' href=""><FiGithub className='text-2xl m-2 text-colorsecondary' /></a>
                                        <a href=""><BiLinkExternal className='text-2xl m-2 text-colorsecondary' /></a>
                                    </div>
                                </div>
                                <h2 className='py-2 font-bold hover:text-neon'>Integrating Algolia Search with WordPress Multisite</h2>
                                <p className='text-sm py-2 text-colorsecondary'>Building a custom multisite compatible WordPress plugin to build global search with Algolia
                                </p>
                                <p className='py-2 text-sm text-colorsecondary'><span>Algolia</span><span className='p-2'>Wordpress</span><span>PHP</span></p>
                            </div>
                            <div  className='my-2 transtition duration-200 ease-in relative top-0 hover:-top-[10px]  hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 md:p-8 text-left' href=''>
                                <div className='flex justify-between items-center py-2'>
                                    <AiOutlineFolder className='text-5xl text-neon' />
                                    <a className='hover:text-colorprimary' href=""><FiGithub className='text-2xl text-colorsecondary' /></a>
                                </div>
                                <h2 className='py-2 font-bold hover:text-neon'>Integrating Algolia Search with WordPress Multisite</h2>
                                <p className='text-sm py-2 text-colorsecondary'>Building a custom multisite compatible WordPress plugin to build global search with Algolia
                                </p>
                                <p className='py-2 text-sm text-colorsecondary'><span>Algolia</span><span className='p-2'>Wordpress</span><span>PHP</span></p>
                            </div>
                            <div  className='my-2 transtition duration-200 ease-in relative top-0 hover:-top-[10px] hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 md:p-8 text-left' href=''>
                                <div className='flex justify-between items-center py-2'>
                                    <div>
                                        <AiOutlineFolder className='text-5xl text-neon' />
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <a className='hover:text-colorprimary' href=""><FiGithub className='text-2xl m-2 text-colorsecondary' /></a>
                                        <a href=""><BiLinkExternal className='text-2xl m-2 text-colorsecondary' /></a>
                                    </div>
                                </div>
                                <h2 className='py-2 font-bold hover:text-neon'>Integrating Algolia Search with WordPress Multisite</h2>
                                <p className='text-sm py-2 text-colorsecondary'>Building a custom multisite compatible WordPress plugin to build global search with Algolia
                                </p>
                                <p className='py-2 text-sm text-colorsecondary'><span>Algolia</span><span className='p-2'>Wordpress</span><span>PHP</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
