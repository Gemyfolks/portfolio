import { useTheme } from "common/providers";
import { ProjectImageType } from "common/types";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./useDebounce.hook";

export function useProjectImage(getter: ProjectImageType) {
  const { theme } = useTheme();
  const debouncedTheme = useDebounce(theme, 500);
  const [isLoading, setLoading] = useState(
    typeof getter === "object" ? false : true
  );
  const [image, setImage] = useState<ProjectImageType | null>(
    typeof getter === "object" ? getter : null
  );
  const [isError, setError] = useState<boolean>(false);
  const refetch = useCallback(() => {
    if (typeof getter === "function") {
      setLoading(true);
      setError(false);
      getter(debouncedTheme)
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
  }, [getter, debouncedTheme]);

  useEffect(() => {
    if (debouncedTheme) refetch();
  }, [refetch, debouncedTheme]);

  return {
    isLoading,
    image,
    isError,
    refetch,
  };
}
