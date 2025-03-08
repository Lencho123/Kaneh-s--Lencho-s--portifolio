import { Laptop2 } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col gap-[1.5rem]">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="flex flex-col gap-[1.5rem] md:flex-row md:flex-wrap">
        <div className="serviceCard m-auto basis-1/4 hover:-translate-y-4 transform-all duration-500 flex flex-col items-center ">
          <Laptop2 className="text-red-300 " />
          <h4 className="h4">Front-End Development: </h4>
          <p className="font-mono text-lg">
            <br />I specialize in creating responsive, interactive, and web
            applications using React, Next.js, and TypeScript. Focuses on usability, I making applications intuitive.
          </p>
        </div>
        <div className="serviceCard m-auto basis-1/4 hover:-translate-y-4 transform-all duration-500 flex flex-col items-center ">
          <Laptop2 className="text-red-300 " />
          <h4 className="h4">Web Application Optimization:</h4>
          <p className="font-mono text-lg">
            <br />I enhance the performance of web applications by optimizing
            loading speed, improving accessibility, and ensuring smooth
            interactions.
          </p>
        </div>
        <div className="serviceCard m-auto basis-1/4 hover:-translate-y-4 transform-all duration-500 flex flex-col items-center ">
          <Laptop2 className="text-red-300 " />
          <h4 className="h4">Clean & Scalable Code:</h4>
          <p className="font-mono text-lg">
            <br />I write maintainable and scalable code that ensures your
            project is easy to update and extend and ensure your applications
            future-proof.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
