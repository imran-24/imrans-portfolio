'use client'

import { Skill } from '@/typings'
import { urlFor } from '@/utils/client'
import {motion} from 'framer-motion'

interface SkillProps{
    directionLeft?: boolean
    skill: Skill
}

const SkillCircle: React.FC<SkillProps> = ({directionLeft, skill}) => {
  return (
    <motion.div
        initial={{
            x: directionLeft ? -100 :  100,
            opacity: 0
        }}
        transition={{
            duration: 1
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}>
        <img
         className='h-10 w-10 sm:h-16 sm:w-16 rounded-full bg-neutral-700/20 hover:bg-neutral-400/80 transition border-[1px] border-neutral-500/50 p-2 object-contain object-center'
        src={urlFor(skill?.image).url()}
        alt=''
        />
    </motion.div>
  )
}

export default SkillCircle