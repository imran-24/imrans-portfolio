"use client";

import { Experience } from "@/typings";
import { urlFor } from "@/utils/client";
import {motion} from 'framer-motion'
import Image from "next/image";

type ExperienceCardProps = {
  experience: Experience | null
}
const ExperienceCard = ({experience}: ExperienceCardProps) => {
  
  if(!experience) return null;

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full lg:w-1/2 xl:w-1/3  snap-center bg-[#292929] p-10 opacity-70 hover:opacity-100 transition-opacity cursor-pointer durantion-300">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-30 xl:h-30 object-cover object-center text-white"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-4 space-y-3 text-white">
        <h4 className="text-3xl font-light">{experience?.jobTitle}</h4>
        <p className="text-xl font-bold ">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
        {
          experience?.technologies
          .map(tech =>(
            <div
              key={tech?._id} 
              className='relative bg-neutral-500/70 rounded-md  w-[30px] h-[30px]'>  
              <Image
                fill
                className='overflow-hidden object-contain object-center p-1'
                src={urlFor(tech.image).url()}
                alt=""
              />
            </div>
          ))
        }
        </div>
        <p className="uppercase text-gray-300">
          {experience?.dateStarted} - {experience.dateEnded}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-base ">
          {
            experience?.points?.map(point => (
              <li key={point}>{point}</li>
            ))
          }
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
