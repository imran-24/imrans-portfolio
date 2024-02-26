'use client'

import { Project } from '@/typings'
import { urlFor } from '@/utils/client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {useRef} from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

type Props={
  projects: Project[] | null
}
const Projects = ({projects}: Props) => {
  
  const projectRef = useRef<HTMLDivElement>(null);
  
  const handleLeft = () => {
    if (!projectRef.current) return;
    projectRef.current.style.transform = 'translateX(-100%)';
  };

  if(!projects) return null
  return (
    <div className="
    h-screen 
    flex 
    relative 
    overflow-hidden 
    flex-col 
    w-full 
    md:max-w-6xl 
    mx-auto 
    px-10  
    
    ">
      <h1 className="title">Projects</h1>
      <div className="w-screen  absolute top-[30%] bg-rose-500/20 left-0 h-[250px] -skew-y-12" />
      <div 
        className="
          w-full
          flex
          ">
          <div
            className="
            pt-20
            pb-10
            w-screen
            flex
            overflow-x-scroll
            gap-x-10
            relative
            overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar-track-gray-400/20 scrollbar-thumb-rose-500/50 scrollbar-thin
            ">
              {/* <div
              onClick={handleLeft}
              role="button"  className='rounded-full absolute inset-y-0 right-5 bg-neutral-500 hover:bg-neutral-600  h-8 w-8 flex items-center justify-center'>
                <BsChevronRight className="h-5 w-5 text-white" />
              </div> */}
          {
            projects.map((project, index) =>(
              
              <div 
              key={project._id}
              ref={projectRef}
              className="min-w-full  snap-center flex flex-col space-y-2  items-center ">
                  <motion.img 
                  initial={{
                    opacity: 0,
                    y: 200,
                    scale: .5,
                    
                  }}
                  transition={{
                    duration: 1
                  }}
                  whileInView={{
                    y: 0,
                    scale: 1,
                    opacity: 1
                  }}
                  viewport={{once: true}}
                  className="max-w-[350px] sm:max-w-[450px] object-contain ease-out  rounded-lg shadow"
                  src={project?.image && urlFor(project.image).url()}
                  alt="" />
                  <div className="space-y-6 max-w-[600px]">
                      <h4 className="
                      text-2xl text-yellow-500/50 font-bold text-center
                      ">
                        {/* <span className="underline decoration-rose-500/20">
                        Case Study {index + 1} of {projects.length}:
                        </span>{" "} */}
                        {project?.title}
                      </h4>
                      <div className='flex items-center justify-center gap-3'>
                      {
                        project?.technologies
                        .map(tech =>(
                          <div
                          key={tech?._id} 
                          className='relative bg-neutral-500/70 rounded-md  w-[30px] h-[30px]'>
                            <Image 
                            fill
                            className='overflow-hidden object-contain object-center' 
                            src={urlFor(tech.image).url()} alt="" />
                          </div>
                        ))
                      }
                      </div>
                      <div className="space-y-4 text-white/70 max-w-[350px] sm:max-w-[450px]">
                        <p className="tracking-tightest line-6">
                        {project?.summary}
                        </p>
                        <div className='text-white'>
                          <span className="text-rose-500/50 font-bold">Demo: </span>
                          <Link className='hover:underline  hover:text-white' href={project.linkToBuild}>{project?.linkToBuild}</Link>
                        </div>
                      </div>
                  </div>
              </div>
              
            ))
          }
          </div>
           
      </div>
    </div>
  )
}

export default Projects