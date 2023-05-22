'use client'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { PageInfo } from '@/typings'
import { urlFor } from '@/utils/client'

type Props={
  pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, The Name's ${pageInfo?.name}`,
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000
  })
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
        <img className='h-32 w-32 object-cover rounded-full' src={urlFor(pageInfo?.heroImage).url()} alt="" />
        <h1 className='title '>{pageInfo?.role}</h1>
      </div>
      
      <div className=' flex font-bold text-[1.6rem] sm:text-4xl'>
        <h1 className='text-rose-500 '>
          <span>
            {text}
          </span>
        </h1>
        <Cursor cursorColor='white' />
      </div>

      <div className='flex items-center justify-between z-20'>  
        
          <button className='heroButton' type='button' >
            <a href='/#about'>
              About
            </a>
            
            </button>
        
        {/* <a href='experience'>
          <button className='heroButton' type='button' >Experience</button>
        // </a> */}
       
          <button className='heroButton' type='button' >
          <a href='/#skills'>
              Skills
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