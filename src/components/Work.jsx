import React, { useState } from 'react';
import { BiRightArrow } from "react-icons/bi";

const workData = [
  {
    company: 'Biralo Studio',
    website: 'https://www.biralo.studio',
    location: 'Nuremberg, Germany',
    role: 'Web Developer',
    startDate: 'Jan 2025',
    endDate: 'Present',
    task: [
      'Built and optimized responsive websites from creative designs.',
      'Migrated legacy Svelte 3 code to Svelte 5 for better performance.',
      'Implemented SEO improvements for client websites.',
      'Set up tracking infrastructure to support performance marketing and sales.'
    ]
  },
  {
    company: 'Code Dot Solution',
    website: '',
    location: 'Bagmati, Nepal',
    role: 'Frontend Web Developer',
    startDate: 'Jun 2024',
    endDate: 'Jan 2025',
    task: [
      'Converted complex Figma designs into responsive web pages using React.js, HTML, and CSS.',
      'Improved mobile responsiveness and usability across browsers and devices.',
      'Enhanced loading speed and cross-browser compatibility.',
      'Contributed design input that led to strong user satisfaction.'
    ]
  },
  {
    company: 'OkayJourney Pvt Ltd',
    website: 'https://www.okayjourney.com',
    location: 'Maitrinagar, Kathmandu',
    role: 'Frontend Web Developer Intern',
    startDate: 'Dec 2023',
    endDate: 'Feb 2024',
    task: [
      'Engineered high-performance web pages with HTML, CSS, React.js, and JavaScript.',
      'Boosted SEO rankings through optimized page structure and speed.',
      'Increased organic traffic with better indexing practices on Google and Bing.'
    ]
  }
];

export const Work = () => {
  const [selected, setSelected] = useState(0); // Tracks the currently selected job

  return (
    <div id="experience" className="bg-bgmain text-colorsecondary">
      <div className="max-w-[1600px] m-auto">
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          className="max-w-[1000px] m-auto p-[25px] sm:p-[50px] md:p-[10%] lg:p-[50px] xl:px-[0px] py-[10%] lg:py-[10%]"
        >
          <li className="flex items-center justify-start">
            <h2 className="text-colorprimary text-xl md:text-2xl font-bold">
              <span className="text-neon">02. </span>Where I've Worked
            </h2>
          </li>
          <div className="py-8 sm:grid sm:grid-cols-[1fr_5fr] gap-2">
            {/* Left Sidebar */}
            <div className="flex sm:flex sm:flex-col items-center mb-4">
              {workData.map((job, index) => (
                <li
                  key={index}
                  className={`list-none mb-1 sm:w-full transtition duration-200 ease-in w-full p-4 text-sm ${selected === index ? "text-neon bg-slate-700" : "hover:text-neon hover:bg-slate-700"
                    } border-b-4 sm:border-b-0 sm:border-l-4 ${selected === index ? "border-neon" : "border-transparent"
                    }`}
                >
                  <button
                    className="w-full text-left"
                    onClick={() => setSelected(index)}
                  >
                    {job.company}
                  </button>
                </li>
              ))}
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-colorprimary text-lg">
                {workData[selected].role}{" "}
                {workData[selected].website ? (
                  <a
                    className="text-neon"
                    href={workData[selected].website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ {workData[selected].company}
                  </a>
                ) : (
                  <span className="text-neon">@ {workData[selected].company}</span>
                )}
              </h2>
              <p className="py-2 text-sm">
                {workData[selected].startDate} - {workData[selected].endDate}
                {` || `}
                <span className='text-teal-500'>{workData[selected].location}</span>
              </p>
              <ul>
                {workData[selected].task.map((item, idx) => (
                  <li key={idx} className="py-2 px-4 text-sm flex items-start">
                    <BiRightArrow className="text-neon mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
