import Image from "next/image";
import StarIcon from "@/public/svg/StarIcon.svg";

export default function Home() {

  return (
    <main className="flex justify-center items-center w-full h-full">
      <div className="w-[500px] flex flex-col lg:items-start items-center gap-4">
        <span className="text-white lg:text-5xl text-4xl md:mr-auto">Hi, I am</span>
        <div className="md:ml-auto"><h1 className="text-white lg:text-6xl text-5xl font-bold animate-typing overflow-hidden whitespace-nowrap w-fit border-r-4 border-r-white">Ali Katiraei </h1></div>
        <div className="flex flex-row items-center md:gap-5 gap-2 mt-4">
          <h2 className="font-titillium lg:text-2xl text-md text-yellow">Web Developer</h2>
          <span>
            <Image priority alt="Star Icon" src={StarIcon}></Image>
          </span>
          <h2 className="font-titillium lg:text-2xl text-md text-yellow">
            Software Developer
          </h2>
        </div>
      </div>
    </main>
  );
}
