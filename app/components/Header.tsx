'use client'

import { useRouter } from 'next/navigation'
import {GrFacebookOption} from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import SocialMediaLink from './SocialMediaLink'
import {motion} from 'framer-motion'
import { Social } from '@/typings'


const items = [
  {
    icon: GrFacebookOption,
    href: 'https://web.facebook.com/imran.syam.56/'
  },
  {
    icon: AiFillGithub,
    href: 'https://github.com/imran-24'
  },
  {
    icon: AiOutlineInstagram,
    href: 'https://www.instagram.com/_imran_syam_/?hl=en'
  },
  {
    icon: AiFillLinkedin,
    href: 'https://www.linkedin.com/in/imran-syam-b8b216217/'
  },
  {
    icon: AiOutlineTwitter,
    href: 'https://twitter.com/ImranSyam169132'
  },

]

type Props = {
  socials: Social[]
}

const Header = ({socials}: Props) => {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 px-6  flex items-center justify-between gap-3 mx-auto max-w-6xl">
      <motion.div 
        initial={{
          x: -500,
          scale: 0.5,
          opacity: 0
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex items-center gap-3">
        {
          items.map((social, index) =>(
            <SocialMediaLink 
              key={index}
              icon={social.icon} 
              href={social?.href} />
          ))
        }
      </motion.div>
      
      <motion.div 
        initial={{
          x: 500,
          scale: 0.5,
          opacity: 0
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }} 
        className='flex items-center gap-3'>
        {/* <a href='/#contact'> */}
          <SocialMediaLink 
            icon={AiOutlineMail} 
            href={'#contact'} />
        {/* </a> */}
        <p 
        className='
          md:flex hidden  
        text-neutral-300
          opacity-60 
          uppercase
          text-sm'>
          Get In Touch
      </p>
      </motion.div>
      
    </header>
  )
}

export default Header