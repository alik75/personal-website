import Image from "next/image";
import Link from "next/link";
import EmailIcon from "@/public/svg/EmailIcon.svg";
import LinkedinIcon from "@/public/svg/LinkedinIcon.svg";
import GithubIcon from "@/public/svg/GithubIcon.svg";
import GitlabIcon from "@/public/svg/GitlabIcon.svg";
import StackoverflowIcon from "@/public/svg/StackoverflowIcon.svg";
import React from "react";
import Button from "../components/Button";

const AboutMePage = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-stretch gap-2 md:px-20 md:py-10 py-2">
      <div className="flex flex-col items-center md:w-1/2 w-full gap-5 flex-none">
        <div className="flex md:flex-row flex-col md:items-start items-center gap-4">
          <Image
            alt="Ali Katiraei"
            width={150}
            height={150}
            className="rounded-full border-4 border-yellow"
            src="/images/me.jpg"
          ></Image>
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-bold text-yellow">Ali Katiraei</h2>
            <span className="text-md text-white">Software Engineer</span>
            <Button link="https://drive.usercontent.google.com/uc?id=1u6GMQ4mYcKlMI11WxL6BWc_MABo0ZTRD&export=download" label="Download My Resume" className={"mt-4"}></Button>
          </div>
        </div>
        
        <ul className="flex flex-row flex-wrap items-center justify-center md:gap-6 gap-3">
          <li className="text-white hover:text-yellow transition-all text-base font-titillium">
            <Link target="_blank" className="flex items-center gap-1" href={"mailto:alikatiraei96@gmail.com"}>
              <EmailIcon className={"[&>path]:stroke-white scale-75"}></EmailIcon>alikatiraei96@gmail.com
            </Link>
          </li>
          <li className="text-white hover:text-yellow transition-all text-base font-titillium">
            <Link
              target="_blank"
              className="flex items-center gap-1"
              href={"https://www.linkedin.com/in/ali-katiraei/"}
            >
              <LinkedinIcon className={"[&>path]:stroke-white scale-75"}></LinkedinIcon>Linkedin
            </Link>
          </li>
          <li className="text-white hover:text-yellow transition-all text-base font-titillium">
            <Link target="_blank" className="flex items-center gap-1" href={"https://github.com/alik75"}>
              <GithubIcon className={"[&>path]:stroke-white scale-75"}></GithubIcon>Github
            </Link>
          </li>
          <li className="text-white hover:text-yellow transition-all text-base font-titillium">
            <Link target="_blank" className="flex items-center gap-1" href={"https://gitlab.com/alik_75"}>
              <GitlabIcon className={"[&>path]:stroke-white scale-75"}></GitlabIcon>GitLab
            </Link>
          </li>
          <li className="text-white hover:text-yellow transition-all text-base font-titillium">
            <Link
              target="_blank"
              className="flex items-center gap-1"
              href={"https://stackoverflow.com/users/14882236/ali-katiraie"}
            >
              <StackoverflowIcon className={"[&>path]:stroke-white scale-75"}></StackoverflowIcon>Stack Overflow
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:w-1/2 w-full gap-5 flex-none md:border-l md:border-b-0 border-l-0 border-b border-yellow md:pl-8 md:pb-0 pl-0 pb-6 md:mb-0 mb-4">
        <h1 className="md:text-4xl text-2xl text-white md:text-left text-center font-bold">About Me</h1>
        <p className="text-justify  md:text-lg xl:text-2xl text-white font-titillium">
          With over <strong>5 years'</strong> experience in <strong>web development</strong>, <strong>project management</strong>,
          and mentoring, I contribute a wealth of experience across diverse
          teams and projects. Thriving on challenges and committed to delivering
          flawless solutions, I leverage my analytical abilities and diverse
          skillset to optimize results. A lifelong learner who embraces
          complexity, I'm eager to contribute my skills and enthusiasm to a
          company that fosters continuous growth.
        </p>
      </div>
    </div>
  );
};

export default AboutMePage;
