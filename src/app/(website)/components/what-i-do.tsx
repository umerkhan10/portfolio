import StringLine from "./string-line";
import FadeOnScroll from "../fade-on-scroll";
import { motion } from "framer-motion";

export default function WhatIDo() {
	const whatIDo = [
		{
		  title: "Front-end",
		  technologies: ["React.js", "Angular", "Next.js", "JavaScript", "TypeScript", "Tailwind"],
		},
		{
		  title: "Back-end",
		  technologies: ["Ruby on Rails", "Node.js", "FastAPI", "GraphQL", "RESTful API"],
		},
		{
		  title: "DevOps & CI/CD",
		  technologies: ["Docker", "Git", "Heroku", "Azure", "Aws"],
		},
		{
		  title: "Database Management",
		  technologies: ["Postgres", "MySQL", "MongoDB", "Neo4j"],
		},
	  ];
	

  return (
		<section
			id="what-i-do"
			className="flex flex-col justify-center min-h-svh"
		>
      <FadeOnScroll>
        <motion.h3 className="w-full text-2xl tracking-[0.6rem] max-w-4xl px-10 mx-auto mb-7">
          What I Do
        </motion.h3>
      </FadeOnScroll>
      <StringLine />
      {whatIDo.map((category, index) => (
        <div key={index} className="pt-3 sm:pt-5">
          <p className="text-4xl sm:text-6xl leading-[80%] w-full max-w-4xl px-10 mb-5 sm:mb-2 mx-auto">
            {category.title}
          </p>
		  <p className="max-w-4xl my-2 px-10 mx-auto text-gradient text-lg sm:text-xl font-semibold tracking-widest leading-[110%]">
  				{category.technologies.join(", ")}
          </p>
          <StringLine />
        </div>
      ))}
    </section>
  );
}
