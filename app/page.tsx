import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'

import { fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from '@/utils/fetchQueries'
import { PageInfo, Project, Skill, Social } from '@/typings'

import footerImage from '../public/images/footer.jpg'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  // static data 
  const pageInfo = await fetchPageInfo()
  const socials = await fetchSocials()
  const skills = await fetchSkills()
  const projects = await fetchProjects()
  console.log(pageInfo)
  console.log(socials)
  console.log(skills)
  console.log(projects)

  return (
    <div className='w-full h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-rose-500/50'>
      
      <Header 
      socials={socials} 
      />
      <section className='snap-center' id='hero'>
        <Hero pageInfo={pageInfo}/>
      </section>
      <section className='snap-center' id='about'>
        <About pageInfo={pageInfo} />
      </section>
      
      <section className='snap-center' id='skills'>
        <Skills skills={skills}/>
      </section>
      <section className='snap-center' id='projects'>
        <Projects projects={projects}/>
      </section>
      <section className='snap-center' id='contact'>
        <Contact />
      </section>

      
        <footer className='sticky bottom-5 w-full cursor-pointer z-50'>
        <div className=' w-full'>
          <div className='h-10 w-10 m-auto'>
          <a href='/#hero'>
            <img className='h-10 w-10 hover:opacity-50 cursor-pointer object-cover rounded-full' src={footerImage.src} alt="" />
          </a>
          </div>
        </div>
        </footer>
      

    </div>
  )
}
