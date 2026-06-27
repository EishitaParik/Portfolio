import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".project-timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".project-timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".project-timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".projectText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="projects"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Projects"
          sub="🌱A collection of projects where I turn ideas into practical, user-focused experiences.
"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {projectCards.map((project) => (
                <div key={project.title} className="exp-card-wrapper project-card">
                <div className="xl:w-2/5">
                  <GlowCard card={project} className="!p-2">  
                    <div className=" aspect-[16/10] w-full overflow-hidden rounded-xl">
                       <img
                       src={project.imgPath}
                       alt={project.title}
                       className="w-full h-full object-cover transition duration-500 hover:scale-105"
                       />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-3/5">
                  <div className="flex items-start">
                    <div className="timeline-wrapper xl:left-[35.5vw] ml-27">
                      <div className="project-timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="projectText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo flex items-center justify-center">
                        <img
                          src={project.logoPath}
                          alt={`${project.title} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div>

                        <h1 className="font-semibold text-3xl">
                          {project.title}
                        </h1>

                        <p className="my-3 text-white-50">
                            🗓️&nbsp;{project.date}
                        </p>

                        <p className="my-5 text-white-50">
                        🛠️&nbsp;{project.tech}
                        </p>
                        

                        <p className="text-[#839CB5] italic">
                          Key Features
                        </p>

                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-lg">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


//aspect-video