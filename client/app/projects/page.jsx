import React from 'react';
import projects from "@/data/projects";
import { Project } from "types";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const page = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {/* {projects.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })} */}
    </div>
  )
}

export default page