"use client"
import React from 'react'
import CountUp from 'react-countup';

const stats = [
    {
        num: 12,
        text: "Project Completed"
    },
    {
        num: 8,
        text: "Technologies"
    }
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 pl-3 pr-3 xl:pt-0 xl:pb-0 xl:pl-0 xl:pr-0' >
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none ">
        {stats.map((item, index) => {
          return <div className='flex flex-1 gap-4 items-center justify-center' key={index}>
            <CountUp 
            end={item.num} 
            duration={5} 
            delay={2} 
            className='text-4xl xl:text-6xl font-extrabold'/>
         <p 
            className={`${item.text.length < 15 ? "max-w-[90px]" : "max-w-[140px]"} text-accent leading-snug`}
          >
          {item.text}
          </p>
          </div>
        })}
        </div>
      </div>
    </section>
)}

export default Stats
