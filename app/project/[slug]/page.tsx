import Image from "next/image";
import React from "react";
import { ProjectItem } from "@/src/utils/interfaces";
import Link from "next/link";
import projects from "@/src/utils/projects.json";
import { notFound } from "next/navigation";

const ProjectPage = ({ params }: any) => {
  const currentProject: ProjectItem | undefined = projects.find(
    (item: ProjectItem) => item.slug == params.slug
  );
  if (!currentProject) {
    return notFound();
  }
  return (
    <div className="flex md:flex-row flex-col items-start gap-5 my-auto">
      <Link
        href={currentProject?.url}
        target="_blank"
        className="relative md:w-1/2 w-full md:h-96 h-52 overflow-hidden rounded-3xl md:mx-0 mx-auto"
      >
        <Image
          alt={[currentProject?.name, currentProject?.desc].join(" | ")}
          fill
          src={currentProject?.image}
          objectFit="cover"
          objectPosition="center"
        ></Image>
         <span className="transition-all absolute p-5 w-full h-full left-0 top-0 bg-blue-dark bg-opacity-70 text-white md:flex hidden flex-col gap-5 items-center justify-center">
              <span className="bg-blue-dark text-white px-4 py-2 rounded-md hover:bg-opacity-50 transition-all">View Project</span>
            </span>
      </Link>
      <div className="flex flex-col md:h-full justify-between md:w-1/2 w-full flex-none md:gap-0 gap-10">
        <div>
          <h1 className="font-bold text-2xl text-white">
            {currentProject?.name}
          </h1>
          <p className="text-yellow my-5 font-titillium">{currentProject?.desc}</p>
          <Link
            href={currentProject ? currentProject.url : "#"}
            target="_blank"
            className="border-b border-white hover:border-yellow transition-all pb-3 group"
          >
            <span className="text-white group-hover:text-yellow transition-all">
              View Project
            </span>
          </Link>
        </div>
        <div>
          <span className="text-base text-white font-bold">Tech use:</span>
          <ul className="flex items-center flex-wrap gap-3 mt-4">
            {currentProject.techs.map((item: string, idx: number) => (
              <li className="text-yellow text-sm font-bold border-yellow border rounded-md px-2 py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
