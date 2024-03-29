import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Link from "next/link";

import {
  fetchExperiences,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "@/utils/fetchQueries";

import footerImage from "../public/images/footer.jpg";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  // static data
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const experiences = await fetchExperiences();

  return (
    <div className="w-full relative h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-rose-500/50">
      <Header socials={socials} />
      <section className="snap-center" id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section className="snap-center" id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section className="snap-center" id="skills">
        <Skills skills={skills} />
      </section>

      <section className="snap-center" id="experiences">
        <Experience experiences={experiences} />
      </section>

      <section className="snap-center" id="projects">
        <Projects projects={projects} />
      </section>

      <section className="snap-center" id="contact">
        <Contact />
      </section>

      <footer className="sticky bottom-5 inset-x-0 m-auto h-10 w-10 rounded-full cursor-pointer z-50">
        <Link href="/#hero">
          <Image
            height={30}
            width={30}
            className="hover:opacity-50 cursor-pointer object-cover rounded-full"
            src={footerImage.src}
            alt=""
          />
        </Link>
      </footer>
    </div>
  );
}
