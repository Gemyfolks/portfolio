import { ProjectImageType } from "common/types";
import { useCallback, useEffect, useState } from "react";

export function useProjectImage(getter: ProjectImageType) {
  const [isLoading, setLoading] = useState(
    typeof getter === "object" ? false : true
  );
  const [image, setImage] = useState<ProjectImageType | null>(
    typeof getter === "object" ? getter : null
  );
  const [isError, setError] = useState<boolean>(false);
  const refetch = useCallback(() => {
    if (typeof getter === "function" && !image) {
      setLoading(true);
      setError(false);
      getter()
        .then((res) => {
          if (res.status === 200) {
            setError(false);
            setImage(res.data);
          }
        })
        .catch((err) => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [getter, image]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    isLoading,
    image,
    isError,
    refetch,
  };
}
