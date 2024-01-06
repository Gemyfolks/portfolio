import Image, { StaticImageData } from "next/image";
import Skeleton from "./Skeleton";
import { useProjectImage } from "common/hooks";
import { ProjectImageType } from "common/types";
import { memo, useEffect } from "react";
import clsx from "clsx";

function ProjectImage({ imageUrl }: { imageUrl: ProjectImageType }) {
  const { image, isError, isLoading, refetch } = useProjectImage(imageUrl);

  return (
    <>
      <div
        className={clsx(
          `absolute hidden sm:block top-8 shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40`,
          {
            "-right-40 ": !isError || !isLoading,
            "right-0": isError || isLoading,
          }
        )}
      >
        {isError || isLoading ? (
          <Skeleton refetch={refetch} isError={isError} />
        ) : null}
        {image ? (
          <Image
            className="w-[28.25rem] rounded-t-lg"
            src={image as StaticImageData}
            width={1130}
            height={800}
            alt="Project I worked on"
            quality={95}
          />
        ) : null}
      </div>
    </>
  );
}

export default memo(ProjectImage);
