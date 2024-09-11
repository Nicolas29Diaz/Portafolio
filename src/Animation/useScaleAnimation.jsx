import { useState, useEffect, useRef } from "react";

export function useScaleAnimation(isVisible, scaleMax = 1, duration = 200) {
  const [scale, setScale] = useState(isVisible ? scaleMax : 0);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    let animationFrame;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / duration, scaleMax);

      if (isVisible) {
        setScale(progress);
      } else {
        setScale(scaleMax - progress);
      }

      if (progress < scaleMax) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, duration]);

  return scale;
}
