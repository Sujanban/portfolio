import React from 'react'

export const Hero = () => {
    return (
        <main className='bg-bgmain h-[90vh]'>
            <div className='h-[100%] max-w-[1000px] m-auto flex flex-col items-start justify-center' data-aos="fade-up">
                <div className='max-w-[1000px] p-[25px] sm:p-[50px] md:p-[10%] lg:p-[50px] xl:p-[0px] m-auto'>
                    <h3 data-aos="fade-up" data-aos-delay="550" className='my-4 text-base text-neon'>Hi, my name is</h3>
                    <h1 data-aos="fade-up" data-aos-delay="650" className='my-4 text-4xl md:text-6xl font-bold text-colorprimary'>Sujan Ban</h1>
                    <h1 data-aos="fade-up" data-aos-delay="750" className='my-4  text-3xl md:text-5xl font-bold text-colorsecondary'>I build things for the web.</h1>
                    <p data-aos="fade-up" data-aos-delay="850" className='text-colorsecondary text-sm md:text-xl'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building a <span className='text-neon'>Frontend</span> for different startups.</p>
                    <li data-aos="fade-up" data-aos-delay="950" className='list-none my-12'><a className='text-sm md:text-base transtition duration-200 ease-in p-4 hover:bg-green-hover border border-neon rounded text-neon' href=''>Lets have a talk!</a></li>
                </div>
            </div>

        </main>
    )
}
