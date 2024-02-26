'use client'

import { Skill } from "@/typings"
import SkillCircle from "./SkillCircle" 

type Props={
  skills: Skill[] | null
}

const Skills = ({skills}: Props) => {
  if(!skills) return null
  return (
    <div className="
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
      <h1 className="title">Skills</h1>
      <div 
        className="
          w-full
          flex
          items-center
          justify-center
          flex-1
          ">
          <div
            className="
            grid
            grid-cols-4 
            gap-2 
            sm:gap-5">
              {
                skills.slice(0, skills.length / 2).map(skill =>(
                  <SkillCircle key={skill?._id} skill={skill} />
                ))
              }
              {
                skills.slice(skills.length / 2, skills.length).map(skill =>(
                  <SkillCircle key={skill?._id} directionLeft skill={skill} />
                ))
              }
          </div>

      </div>
    </div>
  )
}

export default Skills