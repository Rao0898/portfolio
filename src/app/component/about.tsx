// import Link from "next/link";
import React from "react";
import Image from 'next/image';
import ahmed from "../public/ahmed.jpg"


const About = () => {
    return (<div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={ahmed}
              width={300}
              height={400}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
            Hi Im <strong>Ahmed Rao</strong>a passionate front-end developer with a love for creating beautiful, user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I bring ideas to life through clean, efficient code and modern design principles.
            Let's build something amazing together
            </p>
            <div className="flex justify-center">
             
              <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                View CV
              </button>
            </div>
          </div>
        </div>
      </section>
       </div>
 )
}

export default About