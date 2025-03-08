import React from "react";

const About = () => {
  return (
    <section className=" flex gap-[1.5rem] sm:gap-[2rem] flex-col">
      <h2 className="text-3xl font-bold">About Me</h2>

      <h3 className="font-semibold text-2xl ">I am Lencho, Front-end developer</h3>
      <p className=" font-mono text-xl">
        I am Lencho Lachisa, a passionate front-end developer specializing in React,
        Next.js, and TypeScript. I take pride in writing clean, efficient, and
        maintainable code, always prioritizing accessibility, performance, and
        interactivity to create seamless user experiences.
      </p>
      <p className="font-mono text-xl">
        My focus is on building highly efficient and accessible web applications
        that meet modern web standards. If you're looking for a dedicated
        developer to bring your vision to life, I am here to collaborate and
        create something exceptional.
      </p>

      <div className="flex  justify-center mt-[0.5rem] sm:mt-[1rem]">
        <div className=" flex flex-col sm:flex-row justify-center sm:justify-between w-[90%] sm:w-[70%]  p-[2rem] px-[3rem] border-t-0 rounded-xl mt-[1rem] shadow-green-500 shadow-md hover:-translate-y-2 transition-all duration-500 items-center gap-[3rem]">
          <ul className="flex flex-col  gap-[0.6rem] sm:grid sm:grid-cols-2 sm: gap-x-[3rem]">
            <li>
              <span className="font-medium italic ">Name: </span> Lencho
            </li>
            <li>
              <span className="font-medium italic ">Degree: </span> CSE
            </li>
            <li>
              <span className="font-medium italic ">Job: </span> Front End
              developer
            </li>
            <li>
              <span className="font-medium italic ">Freelance: </span> Available
            </li>
            <li>
              <span className="font-medium italic ">City: </span> Adama
            </li>
          </ul>
          <div className="flex gap-[1.5rem] flex-col">
            <button className="lightBtn" >Download Cv</button>
            <button className="lightBtn">Hire Me</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-[1.5rem]">
        <div className="basis-1/2">
          <h2 className="text-xl sm:text-2xl">Experience</h2>
          <p className="pCard font-mono text-lg">
            Throughout my journey, I have worked on various projects that have
            strengthened my skills and confirmed that I am on the right path in
            my career. In addition to my practical experience, I am about to
            graduate with a degree in Computer Science and Engineering, where I
            have gained a profound understanding of computing principles.
          </p>
        </div>
        <div className="basis-1/2">
          <h2 className="text-xl sm:text-2xl">Education</h2>
          <p className="pCard font-mono text-lg">
            Beyond front-end development, my Computer Science and Engineering
            education has given me a profound understanding of core computing
            concepts, including security, databases, APIs and system architecture. This allows me to build secure, and scalable web
            applications while ensuring smooth integration between the front end
            and back end.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
