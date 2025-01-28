import { useRef, useEffect } from "react";

interface UseIntersectionObserverProps {
  callback: () => void;
}

export function useIntersectionObserver({
  callback,
}: UseIntersectionObserverProps) {
  const target = useRef<HTMLDivElement | null>(null);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((eachEntry) => {
      if (eachEntry.isIntersecting) {
        callback();
      }
    });
  };

  useEffect(() => {
    if (!target || !target.current) {
      return;
    }
    const newIo = new IntersectionObserver(observerCallback);
    newIo.observe(target.current);
    return () => newIo.disconnect();
  }, [observerCallback]);

  return {
    target,
  };
}
