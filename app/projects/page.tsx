import React from "react";
import projects from "@/src/utils/projects.json";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/src/utils/interfaces";

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="md:text-4xl text-xl font-bold text-white mb-10 text-center">
        Project Showcase
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-10">
        {projects.map((item: ProjectItem, idx: number) => (
          <Link target="_blank" href={"/project/"+item.slug} className="relative md:w-96 md:h-96 w-56 h-56 rounded-3xl overflow-hidden group cursor-pointer">
            <Image
              objectFit="cover"
              objectPosition="center"
              className="group-hover:scale-125 transition-all"
              fill
              src={item.image}
              title={item.name}
              alt={[item.name, item.desc].join(" | ")}
            ></Image>
            <span className="md:opacity-0 opacity-100 group-hover:opacity-100 transition-all absolute p-5 w-full h-full left-0 top-0 bg-blue-dark bg-opacity-70 text-white flex flex-col gap-5 items-center justify-center">
              <h2 className="text-2xl font-bold text-white">{item.name}</h2>
              <p className="text-sm text-white text-center font-titillium">
                {item.desc}
              </p>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
