'use client'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { PageInfo } from '@/typings'
import { urlFor } from '@/utils/client'
import Image from 'next/image'

type Props={
  pageInfo: PageInfo | undefined | null
}

const Hero = ({pageInfo}: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, The Name's ${pageInfo?.name}`,
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000
  })

  if(!pageInfo) return null;
  
  return (
    <div 
      className='
        h-screen 
        flex flex-col items-center justify-center gap-3
        relative
        overflow-hidden
        '>

      <div className='absolute'>
        <BackgroundCircles />
      </div>
      
      <div className=' flex flex-col items-center gap-3 justify-center mt-36'>
        <Image width={100} height={100} className='object-center object-contain rounded-full' src={urlFor(pageInfo?.heroImage).url()} alt="" />
        <h1 className='uppercase tracking-[8px] sm:tracking-[15px] text-gray-500 text-sm  '>{pageInfo?.role}</h1>
      </div>
      
      <div className=' flex font-bold text-[1.6rem] sm:text-4xl z-[99999]'>
        <h1 className='text-rose-500 '>
          <span>
            {text}
          </span>
        </h1>
        <Cursor cursorColor='white' />
      </div>

      <div className='flex items-center justify-between z-[99999]'>  
        
          <button className='heroButton' type='button' >
            <a href='/#about'>
              About
            </a>
            
            </button>
       
            <button className='heroButton' type='button' >
            <a href='/#skills'>
                Skills
              </a>
            </button>

            <button className='heroButton' type='button' >
            <a href='/#experiences'>
              Experience
            </a>
          </button>
          
            <button className='heroButton' type='button' >
            <a href='/#projects'>
                Projects
              </a>
            </button>
    
      </div>

      
      
      
    </div>
  )
}

export default Hero