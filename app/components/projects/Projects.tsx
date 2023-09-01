'use client'

import { Project } from '@/typings'
import { urlFor } from '@/utils/client'
import {motion} from 'framer-motion'

type Props={
  projects: Project[] | null
}
const Projects = ({projects}: Props) => {
  
  if(!projects) return null
  return (
    <div className="h-screen  relative overflow-hidden ">
      <h1 className="title mt-20 absolute px-20">Projects</h1>
      <div className="w-screen absolute top-[30%] bg-rose-500/20 left-0 h-[250px] -skew-y-12" />
      <div 
        className="
          w-full
          h-full
          flex
          items-center
          
          ">
          <div
            className="
            w-screen
            flex
            items-center
            overflow-x-scroll
            gap-10
            overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar-track-gray-400/20 scrollbar-thumb-rose-500/50 scrollbar-thin
            ">
          {
            projects.map((project, index) =>(
              
              <div 
              key={project._id}
              className="min-w-full h-screen snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 ">
                  <motion.img 
                  initial={{
                    opacity: 0,
                    y: -200,
                    scale: .5,
                    
                  }}
                  transition={{
                    duration: 1.5
                  }}
                  whileInView={{
                    y: 0,
                    scale: 1,
                    opacity: 1
                  }}
                  viewport={{once: true}}
                  className="max-w-[350px] sm:max-w-[550px] object-contain"
                  src={project?.image && urlFor(project.image).url()}
                  alt="" />
                  <div className="space-y-6 max-w-[600px]">
                      <h4 className="
                      text-xl text-yellow-500/50 font-bold text-center
                      ">
                        <span className="underline decoration-rose-500/20">
                        Case Study {index + 1} of {projects.length}:
                        </span>{" "}
                        {project?.title}
                      </h4>
                      <div className='flex items-center justify-center gap-3'>
                      {
                        project?.technologies
                        .map(tech =>(
                          <img key={tech?._id} 
                          className='h-10 w-10 rounded-full p-1 object-contain object-center' 
                          src={urlFor(tech.image).url()} alt="" />
                        ))
                      }
                      </div>
                      <p className="text-white/30 text-sm">
                      {project?.summary}
                      </p>
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