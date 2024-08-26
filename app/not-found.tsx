import React from "react";
import Astronaut from "@/public/svg/Astronaut.svg";
import Icon404 from "@/public/svg/404.svg";
import Planets from "@/public/svg/Planets.svg";
import Rocket from "@/public/svg/Rocket.svg";

export const metadata = {
  title: "Ali Katiraei | 404 Not found",
  description: "This page not found!",
  robots: "noindex, nofollow",
};

const NotFound = () => {
  return (
    <div className="flex relative w-full h-full overflow-hidden">
      <Planets
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        }
      ></Planets>
      <Astronaut
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2"
        }
      ></Astronaut>
      <Icon404
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        }
      ></Icon404>
      <Rocket
        className={
          "absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/3"
        }
      ></Rocket>
    </div>
  );
};

export default NotFound;
