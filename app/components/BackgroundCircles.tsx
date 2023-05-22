'use client'

import {motion} from 'framer-motion'

const BackgroundCircles = () => {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity: [.1, .2, .4, .8, .1, 1],
        borderRadius:["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
        duration: 2.5
    }}
    className='relative flex justify-center items-center '>
        <div className='absolute animate-ping  rounded-full border border-[#333333]  opacity-50 h-[150px] w-[150px]' />
        <div className='rounded-full border border-[#333333] h-[250px] w-[250px] absolute opacity-50' />
        <div className='rounded-full border border-[#333333] h-[400px] w-[400px] absolute opacity-30' />
        <div className='animate-pulse rounded-full border border-rose-200/70 opacity-20 h-[570px] w-[570px] absolute ' />
        <div className='animate-ping  rounded-full border border-[#333333]  h-[700px] w-[700px] absolute' />
    </motion.div>
  )
}

export default BackgroundCircles