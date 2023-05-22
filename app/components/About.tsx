'use client'

import { PageInfo } from '@/typings'
import { urlFor } from '@/utils/client'
import {motion} from 'framer-motion'

type Props={
  pageInfo: PageInfo
}
const About = ({pageInfo}: Props) => {
  return (
    <motion.div
      initial={{
        
        opacity: 0
      }}
      transition={{
        duration: 1
      }}
      whileInView={{
        opacity: 1.5
      }}
      className="h-screen relative overflow-hidden px-8 sm:px-20">
      {/* title */}
      <h1 className="title mt-20 absolute ">About</h1>
      <div 
        className="
          h-full
          flex 
          flex-col 
          md:flex-row
          items-center
          justify-center
          gap-10">
           
            {/* image */}
            <motion.img 
                initial={{
                  x: -200,
                  opacity: 0
                }}
                transition={{
                  duration: 1.2
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{ once: true}}
                className='
                  rounded-full 
                  object-center 
                  object-cover 
                  h-40 w-40
                  md:rounded-md
                  lg:h-[450px] lg:w-[300px]
                  ' 
                  src={urlFor(pageInfo?.profilePic).url()} alt=""
            />
            {/* Intro */}
            <div className='space-y-6'>
              <h4 className='text-amber-500/80 text-[1.7rem] sm:text-3xl font-semibold text-center md:text-left'>
                Here is a <span className='underline decoration-rose-500/30 '>little</span> about me
              </h4>
              <p className='text-sm font-light max-w-2xl text-white/20 tracking-widest'>
                {pageInfo?.backgroundInfo}
              </p>
            </div>
      </div>
    </motion.div>
  )
}

export default About