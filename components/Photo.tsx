"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
        <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1,
                  transition:{delay:1,
                  duration:1,
                  ease:'easeIn'
                  }
        }} >
          {/* image */}
            <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1,
                      transition:{delay:1.4,
                      duration:1.2,
                      ease:'easeInOut'
                      }
            }} 
            className="w-[298px] h-[298px] xl:w-[495px] xl:h-[495px] mix-blend-normal absolute left-1.5 top-1.5 
                        md:w-[290px] md:h-[290px] sm:w-[290px] sm:h-[290px]">
                <Image src="/assets/ivan.png" priority quality={100} fill alt="Ivan Septa Adi Pratama, Fullstack Web Developer" className='object-contain'/>
            </motion.div>

            {/* circle */}
            <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" 
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle 
              cx="253" 
              cy="253" 
              r="250" 
              stroke="#00D7FF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{strokeDasharray: "24 10 0 0",
              }}
              animate={{
                strokeDasharray:['15 120 25 25','16 25 92 72','4 250 22 22'],
                rotate:[120,360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType:'reverse'
              }}
              />
            </motion.svg>

        </motion.div>
    </div>
  )
}

export default Photo
