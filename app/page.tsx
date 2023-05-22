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


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  // static data 
  const pageInfo: PageInfo = await fetchPageInfo()
  const socials: Social[] = await fetchSocials()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()


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
      {/* <Experience /> */}
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
        <a href='/#hero'>
          <img className='h-10 w-10 hover:opacity-50 cursor-pointer object-cover rounded-full mx-auto' src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/170259179_2838121309788621_2428918469295411001_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEEv2Q7Ufs4RFuRX7sfematdJ0kGORJYJZ0nSQY5Elgln-PMHjYYrxsysFHIUFVxVJInhyrsxb50itMFFt2-tfy&_nc_ohc=a8PXwIOKk3YAX-svJgH&_nc_ht=scontent.fdac5-1.fna&oh=00_AfBtH7fXNr8L-DQNfwM-Zs46KvI1MIjG_OG2SSE4jQEO0w&oe=648DFBAA" alt="" />
        </a>
        </div>
        </footer>
      

    </div>
  )
}
