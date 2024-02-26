'use client'

import { PageInfo } from '@/typings'
import { urlFor } from '@/utils/client'
import {motion} from 'framer-motion'

type Props={
  pageInfo: PageInfo | null
}
const About = ({pageInfo}: Props) => {

  if(!pageInfo) return null
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
      className="
      h-screen 
      flex 
      relative 
      overflow-hidden 
      flex-col 
      space-y-5 
      w-full 
      md:max-w-6xl 
      mx-auto 
      px-10  
      justfy-center
      items-center">
      {/* title */}
      <h1 className="title">About</h1>
      <div 
        className="
          w-full
          flex-1
          flex 
          flex-col 
          lg:flex-row
          items-center
          lg:justify-between
          justify-center
          space-y-10
          space-x-10
          ">
           
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
                // viewport={{ once: true}}
                className='
                  rounded-full 
                  object-center 
                  object-cover 
                  h-40 w-40
                  lg:rounded-md
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