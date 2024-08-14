import Image from "next/image";
import StarIcon from "@/public/svg/StarIcon.svg";

export default function Home() {

  return (
    <main className="flex justify-center items-center w-full h-full">
      <div className="w-[500px] flex flex-col gap-4">
        <span className="text-white text-5xl mr-auto">Hi, I am</span>
        <div className="ml-auto"><h1 className="text-white text-6xl font-bold animate-typing overflow-hidden whitespace-nowrap w-fit border-r-4 border-r-white">Ali Katiraei </h1></div>
        <div className="flex flex-row items-center gap-5 mt-4">
          <h2 className="font-titillium text-2xl text-yellow">Web Developer</h2>
          <span>
            <Image priority alt="Star Icon" src={StarIcon}></Image>
          </span>
          <h2 className="font-titillium text-2xl text-yellow">
            Software Developer
          </h2>
        </div>
      </div>
    </main>
  );
}
