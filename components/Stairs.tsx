import React from 'react'
import {  motion} from 'framer-motion'

const stairAnimation ={
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

// calculate the reverse index for staggered delay

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};


const Stairs = () => {
  return (
    <>
    {/* 
        render 6 motion each, divs, representing a step of the stairs. 
        each & div will hame same animation define the stairsAnimation object.   
        the delay of divs each is calculated dinamically based on it's reversed index,
        creating a straggered effect with decreasing dela for each subsequent step.
    */}

    {[...Array(6)].map((_,index) => {
        return (
        <motion.div 
        key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" 
        transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
        }}
        className='h-full w-full bg-accent relative'
            />
    )
    }
)}
    </>
  )
}

export default Stairs
