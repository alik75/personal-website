import Image from "next/image";
import StarIcon from "@/public/svg/StarIcon.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates:{canonical:"https://alikatiraei.com"}
}

export default function Home() {

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{
			"@context": "http://www.schema.org",
			"@type": "person",
			"name": "Ali Katiraei",
			"jobTitle": "Software Developer",
			"url": "https://alikatiraei.com",
			"address": {
			"@type": "PostalAddress",
			"streetAddress": "Isfahan, IRAN",
			"addressLocality": "Isfahan",
			"addressRegion": "Isfahan",
			"addressCountry": "IRAN"
			},
			"email": "alikatiraei96@gmail.com",
			"telephone": "+989363147145",
			"birthDate": "1996-08-23"
		}`}}> 
		
	</script>
    <main className="flex justify-center items-center w-full h-full">
      <div className="w-[500px] flex flex-col lg:items-start items-center gap-4">
        <span className="text-white lg:text-5xl text-4xl md:mr-auto">Hi, I am</span>
        <div className="md:ml-auto"><h1 className="text-white lg:text-6xl text-5xl font-bold animate-typing overflow-hidden whitespace-nowrap w-fit border-r-4 border-r-white">Ali Katiraei </h1></div>
        <div className="flex flex-row items-center md:gap-5 gap-2 mt-4">
          <h2 className="font-titillium lg:text-2xl text-md text-yellow">Web Developer</h2>
          <span>
            <StarIcon></StarIcon>
          </span>
          <h2 className="font-titillium lg:text-2xl text-md text-yellow">
            Software Developer
          </h2>
        </div>
      </div>
    </main>
    </>
  );
}
