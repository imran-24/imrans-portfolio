'use client'

import { Skill } from "@/typings"
import SkillCircle from "./SkillCircle" 

type Props={
  skills: Skill[]
}

const Skills = ({skills}: Props) => {
  return (
    <div className="h-screen relative overflow-hidden px-8 sm:px-20 ">
      <h1 className="title mt-20 absolute ">Skills</h1>
      <div 
        className="
          h-full
          flex
          items-center
          justify-center
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