'use client'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'
import {GrMail} from 'react-icons/gr'
import { useForm, SubmitHandler } from "react-hook-form";
import {motion} from 'framer-motion'

type Inputs = {
  name: string,
  email: string,
  subject: string;
  message:string
};


const Contact = () => {
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    window.location.href = `mailto:md.imransyam1956@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}, ${data.message}} ${data.email}`
  };
  return (
    <div className="h-screen relative overflow-hidden px-10 md:px-20">
    {/* title */}
    <h1 className="title mt-20 absolute ">contact</h1>
      <motion.div 
        initial={{
          opacity: 0,
          scale: .5
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="
          h-full
          flex 
          flex-col 
          items-center
          justify-center
          gap-4
          mt-4
          sm:mt-0
          sm:gap-10">
            <h1 className="text-xl sm:text-2xl font-semibold  sm:font-bold text-white ">
              I have got just what you need. Let's talk
            </h1>

            <div className='space-y-2 sm:space-y-4'>
              <div className="flex items-center justify-center gap-3">
                <BsFillTelephoneFill className='text-rose-500/50' size={22} />
                <h4 className='text-sm text-white/20'>+01755997834</h4>
              </div>

              <div className="flex items-center justify-center gap-3">
                <GrMail className='text-rose-500/50' size={22} />
                <h4 className='text-sm text-white/20'>md.imransyam1956@gmail.com</h4>
              </div>

              <div className="flex items-center justify-center gap-3">
                <IoLocationSharp className='text-rose-500/50' size={22} />
                <h4 className='text-sm text-white/20'>KA-69, Baridhara J-Block, Vatara, Nodda Boro Bari</h4>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-2 max-w-4xl'>
              <div className='flex items-center gap-2'>
                <input {...register('name')} type="text" placeholder='Name' className='input ' />
                <input {...register('email')} type="email" placeholder='Email' className='input ' />
              </div>
              <input {...register('subject')} type="text" placeholder='Subject' className='input w-full ' />
              <textarea {...register('message')} className='input w-full' placeholder='Message' cols={30} rows={5}></textarea>
              <button type='submit' className='submitBtn'>Submit</button>
            </form>
      </motion.div>
    </div>
  )
}

export default Contact