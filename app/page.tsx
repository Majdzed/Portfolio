import Image from "next/image";
import Navbar from "./_components/Navbar";
import Main from "./Features/Main";
import Skills from "./Features/Skills";
import Degrees from "./Features/Degrees";
import Certificates from "./Features/Certificates";
import Projects from "./Features/Projects";
import React from "react";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-10 gap-28 scroll-smooth ">
      <Navbar />
      <Main />
      <Skills />
      <Degrees />
      <Certificates />
      <Projects />
    </div>
  );
}
