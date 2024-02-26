"use client";

import { motion } from "framer-motion";
const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full lg:w-1/2 xl:w-1/3  snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity cursor-pointer durantion-300">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-30 xl:h-30 object-cover object-center text-white"
        src="/images/footer.jpg"
        alt=""
      />
      <div className="px-0 md:px-4 space-y-3 text-white">
        <h4 className="text-3xl font-light">CEO OF PAPAFAM</h4>
        <p className="text-xl font-bold ">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8 rounded-full"
            src="/images/footer.jpg"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="/images/footer.jpg"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="/images/footer.jpg"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="/images/footer.jpg"
            alt=""
          />
        </div>
        <p className="uppercase text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-2 ml-5 text-base ">
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
