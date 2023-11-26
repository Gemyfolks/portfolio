import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "common/types";
import { useActiveSectionContext } from "common/providers";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  // const router = useRouter();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
      // router.replace(`#${sectionName.toLowerCase()}`, {
      //   scroll: false,
      // });
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView,
  };
}
