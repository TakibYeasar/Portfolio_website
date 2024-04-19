import React from "react";
import Link from "next/link";
import {projects} from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div className="overflow-x-hidden w-full pt-5">
        <h2 className="landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-3xl font-bold mb-10 pt-4 md:pt-0 md:w-max">Here are a few of my favorite projects.</h2>
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.slice(0, 3).map((item) => {
          return (
            <ProjectCard key={item.id} project={item} />
          );
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Projects