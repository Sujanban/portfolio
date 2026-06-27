import React from 'react';
import profile from '../images/pp-blur.png'
import {
  SiCss3,
  SiDigitalocean,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiJekyll,
  SiMongodb,
  SiNodedotjs,
  SiShopify,
  SiReact,
  SiSass,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { GiAstronautHelmet } from "react-icons/gi";

const techStack = [
  { name: "HTML", icon: SiHtml5, accent: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss3, accent: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, accent: "text-[#F7DF1E]" },
  { name: "Svelte", icon: SiSvelte, accent: "text-[#FF3E00]" },
  { name: "React", icon: SiReact, accent: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, accent: "text-colorprimary" },
  { name: "Astro", icon: GiAstronautHelmet, accent: "text-[#FF5D01]" },
  { name: "Jekyll", icon: SiJekyll, accent: "text-[#CC0000]" },
  { name: "Node", icon: SiNodedotjs, accent: "text-[#339933]" },
  { name: "Tailwind", icon: SiTailwindcss, accent: "text-[#38BDF8]" },
  { name: "Express", icon: SiExpress, accent: "text-colorprimary" },
  { name: "WordPress", icon: SiWordpress, accent: "text-[#21759B]" },
  { name: "Shopify", icon: SiShopify, accent: "text-[#95BF47]" },
  { name: "DigitalOcean", icon: SiDigitalocean, accent: "text-[#0080FF]" },
  { name: "MongoDB", icon: SiMongodb, accent: "text-[#47A248]" },
  { name: "TypeScript", icon: SiTypescript, accent: "text-[#3178C6]" },
  { name: "SCSS", icon: SiSass, accent: "text-[#CF649A]" },
  { name: "Git", icon: SiGit, accent: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, accent: "text-colorprimary" },
];

export const About = () => {
  return (
    <div id='about' className='bg-bgmain'>
      <div className='max-w-[1600px] m-auto'>
        <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className='max-w-[1000px] m-auto p-[25px] sm:p-[50px] md:p-[10%] lg:p-[50px] xl:px-[0px]  py-[10%] lg:py-[10%] lg:flex'>
          <div className='text-colorsecondary flex-1'>
            <li className='flex items-center justify-start'>
              <h2 className='text-colorprimary text-xl md:text-2xl font-bold'><span className='text-neon'>01. </span>About Me</h2>
            </li>
            <p className='py-4 text-sm md:text-base'>Hello! I’m Sujan Ban, a Web Developer focusing on developing platforms with the latest technologies. I build dynamic web applications with engaging interfaces and am committed to clean code and continuous learning.</p>
            <p className='py-2 text-sm md:text-base'>I’ve worked with Biralo Studio, Code Dot Solution, and OkayJourney, building and optimizing websites with React, Svelte, SEO, and full-stack tools.</p>
            {/* <p className='py-2 text-sm md:text-base'>Fast-forward to today, and I’ve had the privilege of working at an travel ticket booking agency, a start-up, a huge corporation, and a student-led idea. My main focus these days is building accessible, inclusive interface and digital experiences at okayjourney for daily users.</p> */}
            <p className='py-2 text-sm md:text-base'>Here are a few technologies I’ve been working with recently:</p>
            <div className='flex flex-wrap gap-x-4 gap-y-3 py-4'>
              {techStack.map(({ name, icon: Icon, accent }) => (
                <div
                  key={name}
                  className='group flex items-center gap-2 transition duration-200 ease-in-out hover:text-neon'
                >
                  <span className={`flex shrink-0 items-center justify-center ${accent} transition duration-200 ease-in-out group-hover:scale-110`}>
                    <Icon className='text-lg' />
                  </span>
                  <p className='text-[10px] font-light text-colorprimary sm:text-[11px]'>{name}</p>
                </div>
              ))}
            </div>
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
