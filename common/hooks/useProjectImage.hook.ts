import { ProjectImageType } from "common/types";
import { useState } from "react";

export function useProjectImage(getter: ProjectImageType) {
  const [isLoading, setIsLoading] = useState(
    typeof getter === "object" ? false : true
  );
  const [image, setImage] = useState<ProjectImageType | null>(
    typeof getter === "object" ? getter : null
  );
  const [isError, setError] = useState<boolean>(false);
  if (typeof getter === "function" && !image && !isError) {
    getter()
      .then((res) => {
        if (res.status === 200) {
          setImage(res.data);
        }
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    isLoading,
    image,
    isError,
  };
}
