import React from 'react';
import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import project1 from "../images/project1.png";

export const Project = () => {
    return (
        <div className='bg-bgmain text-colorprimary'>
            <div className='max-w-[1600px] m-auto flex justify-center'>
                <div className='w-[1000px] m-auto p-[25px] sm:p-[50px] md:p-[10%] lg:p-[50px] xl:p-[0px]'>
                    <li className='flex items-center justify-start'>
                        <h2 className='text-colorprimary text-2xl font-bold'><span className='text-neon'>03. </span>Some Things I’ve Built</h2>
                        {/* <span className='m-8 h-[1px] w-[40%] bg-slate-500'></span> */}
                    </li>
                    <div className='relative py-4 md:py-8 flex items-center'>
                        <img className='hidden md:block w-[60%] h-[100%] grayscale rounded hover:grayscale-0' src={project1} alt="" />
                        <div className='w-full lg:max-w-[50%] md:max-w-[80%] md:text-end md:absolute bg-bgcard md:bg-transparent right-0'>
                            <div className=''>
                                <h3 className='p-4 text-neon'>Featured Project</h3>
                                <a className='p-4 text-2xl font-semibold' href="">Realestate Marketplace</a>
                                <div className='p-4 text-colorsecondary rounded bg-bgcard'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</div>
                                <li className='list-none p-4 text-colorsecondary'> <span className='p-2'>Javascript</span><span className='p-2'>PHP</span><span className='p-2'>Laravel</span><span className='p-2'>MySql</span> </li>
                                <p className='p-2 flex '><a className='p-2' href=""><BiLinkExternal/></a><a className='p-2' href=""><FiGithub/></a></p>
                            </div>
                        </div>
                    </div>
                    <div className='relative py-4 md:py-8 flex items-center'>
                        <img className='hidden md:block w-[60%] h-[100%] grayscale rounded hover:grayscale-0 ml-auto' src={project1} alt="" />
                        <div className='lg:max-w-[50%] md:max-w-[80%] md:text-start md:absolute bg-bgcard md:bg-transparent left-0'>
                            <div className=''>
                                <h3 className='p-4 text-neon'>Featured Project</h3>
                                <a className='p-4 text-2xl font-semibold' href="">Realestate Marketplace</a>
                                <div className='p-4 text-colorsecondary rounded bg-bgcard'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</div>
                                <li className='list-none p-4 text-colorsecondary'> <span className='p-2'>Javascript</span><span className='p-2'>PHP</span><span className='p-2'>Laravel</span><span className='p-2'>MySql</span> </li>
                                <li className='p-2 list-none flex text-end'><a className='p-2' href=""><BiLinkExternal/></a><a className='p-2' href=""><FiGithub/></a></li>
                            </div>
                        </div>
                    </div>
                    <div className='text-center py-8 '>
                        <h1 className='text-2xl font-bold'>Other Noteworthy Projects</h1>
                        <h3 className='text-neon p-4'>view the archive</h3>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-4'>
                            <a className=' transtition duration-200 ease-in relative top-0 hover:-top-[10px]  hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-8 text-left' href=''>
                                <div className='flex justify-between items-center py-2'>
                                    <AiOutlineFolder className='text-5xl text-neon' />
                                    <a className='hover:text-colorprimary' href=""><FiGithub className='text-2xl text-colorsecondary' /></a>
                                </div>
                                <h2 className='py-2 font-bold hover:text-neon'>Integrating Algolia Search with WordPress Multisite</h2>
                                <p className='text-sm py-2 text-colorsecondary'>Building a custom multisite compatible WordPress plugin to build global search with Algolia
                                </p>
                                <p className='py-2 text-sm text-colorsecondary'><span>Algolia</span><span className='p-2'>Wordpress</span><span>PHP</span></p>
                            </a>
                            <a className='transtition duration-200 ease-in relative top-0 hover:-top-[10px] hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-8 text-left' href=''>
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
                            </a>
                            <a className='transtition duration-200 ease-in relative top-0 hover:-top-[10px]  hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-8 text-left' href=''>
                                <div className='flex justify-between items-center py-2'>
                                    <AiOutlineFolder className='text-5xl text-neon' />
                                    <a className='hover:text-colorprimary' href=""><FiGithub className='text-2xl text-colorsecondary' /></a>
                                </div>
                                <h2 className='py-2 font-bold hover:text-neon'>Integrating Algolia Search with WordPress Multisite</h2>
                                <p className='text-sm py-2 text-colorsecondary'>Building a custom multisite compatible WordPress plugin to build global search with Algolia
                                </p>
                                <p className='py-2 text-sm text-colorsecondary'><span>Algolia</span><span className='p-2'>Wordpress</span><span>PHP</span></p>
                            </a>
                            <a className='transtition duration-200 ease-in relative top-0 hover:-top-[10px] hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-8 text-left' href=''>
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
                            </a>
                            <a className='transtition duration-200 ease-in relative top-0 hover:-top-[10px]  hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-8 text-left' href=''>
                                <div className='flex justify-between items-center py-2'>
                                    <AiOutlineFolder className='text-5xl text-neon' />
                                    <a className='hover:text-colorprimary' href=""><FiGithub className='text-2xl text-colorsecondary' /></a>
                                </div>
                                <h2 className='py-2 font-bold hover:text-neon'>Integrating Algolia Search with WordPress Multisite</h2>
                                <p className='text-sm py-2 text-colorsecondary'>Building a custom multisite compatible WordPress plugin to build global search with Algolia
                                </p>
                                <p className='py-2 text-sm text-colorsecondary'><span>Algolia</span><span className='p-2'>Wordpress</span><span>PHP</span></p>
                            </a>
                            <a className='transtition duration-200 ease-in relative top-0 hover:-top-[10px] hover:text-colorprimary rounded bg-bgcard shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-8 text-left' href=''>
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
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
