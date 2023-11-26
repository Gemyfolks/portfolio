"use client";

import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCE } from "lib";
import { useSectionInView } from "common/hooks";
import { useTheme } from "common/providers";
import { Fragment, useEffect, useRef } from "react";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.25);
  const { theme } = useTheme();
  let isInViewRef = useRef<boolean>(inView);
  useEffect(() => {
    // A workaround because the vertical timeline component isn't changing the styling correctly in next.js 13.5 onward
    // So i set it manually to preserve the animation
    if (isInViewRef.current) return;
    else {
      isInViewRef.current = inView;
    }
  }, [inView, isInViewRef]);
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {EXPERIENCE.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              visible={isInViewRef.current}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/50">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
