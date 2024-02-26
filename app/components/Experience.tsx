"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type ExperienceProps = {
  experiences: Experience[] | null;
};
const Experience = ({ experiences }: ExperienceProps) => {
  if (!experiences) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1.5,
      }}
      className="
      h-screen 
      flex 
      relative 
      overflow-hidden 
      flex-col 
      w-full 
      md:max-w-6xl 
      mx-auto 
      px-10  
      space-y-10
      items-center"
    >
      <h1 className="title">Experience</h1>
      <div
        className="
          w-full
          flex
          items-center
          justify-center
          space-x-5 
          overflow-y-hidden snap-x snap-mandatory z-20
          scrollbar-track-gray-400/20 scrollbar-thumb-rose-500/50 scrollbar-thin
          pb-5
          "
      >
        {experiences?.length > 0 &&
          experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
};

export default Experience;
