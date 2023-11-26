"use client";

import SectionHeading from "./SectionHeading";
import { PROJECTS } from "lib/data";
import Project from "./Project";
import { useSectionInView } from "common/hooks";
import { Fragment } from "react";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Personal projects</SectionHeading>
      <div>
        {PROJECTS.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
