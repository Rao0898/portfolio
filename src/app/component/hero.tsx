"use client";
import React from "react";
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import ahmed from "../public/ahmed.jpg"




const Hero = () => {
    return (
        
            <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designer",
                  "Geophysicist",
                  "GIS Analyst",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-700"></div>
            <p className="mb-8 leading-relaxed">
            Hi Im <strong>Ahmed Rao</strong>, a passionate front-end developer with a love for creating beautiful, user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I bring ideas to life through clean, efficient code and modern design principles.
            I have a knack for turning complex problems into elegant solutions, and I thrive in fast-paced environments where creativity and innovation are at the forefront. Whether its building responsive layouts, crafting smooth animations, or optimizing web performance, Im dedicated to delivering an exceptional user experience on every project.
            When Im not coding, you'll find me exploring the latest trends in web design, contributing to open-source projects, or experimenting with new technologies to stay ahead of the curve. My goal is to continue growing as a developer while making a meaningful impact on the digital world.
            Let's build something amazing together
            </p>
            <div className="flex justify-center">
             <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
                Contact
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image 
            className="object-cover object-center rounded mx-auto w-[15rem]"
            alt="hero"
            width={500}
            height={500}
            src={ahmed}
          />
          </div>
        </div>
      </section>
      
      

    )
}

export default Hero