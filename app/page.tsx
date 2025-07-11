"use client";
import React from 'react'
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          
          {/* Text Section */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl text-accent dark:text-white'>
              Fullstack Web Developer
            </span>

            <h1 className='h1 mb-6 text-black dark:text-white/60'>
              Hello I'm <br />
              <span className='text-accent dark:text-new'>Ivan Septa Adi Pratama</span>
            </h1>

            <p className='max-w-[500px] mb-10 text-dark dark:text-white/60 leading-relaxed'>
              I am a IT graduate specializing in fullstack web development, with additional experience in machine learning.
            </p>

            {/* Button & Social Media */}
            <div className='flex flex-col xl:flex-row items-center gap-8 justify-between xl:justify-start'>

              <Button 
                variant="outline"
                size="lg"
                className='uppercase items-center gap-1 bg-white dark:bg-background text-dark dark:text-accent hover:bg-accent-dark hover:bg-accent rounded-4xl border-2 border-accent'
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>

              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles="flex gap-8 text-2xl"
                  iconStyles="text-accent dark:text-accent hover:text-accent"
                />
              </div>

            </div>
          </div>

          {/* Photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  )
}

export default Home;
