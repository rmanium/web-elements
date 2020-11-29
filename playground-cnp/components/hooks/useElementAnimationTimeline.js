import React, { useEffect } from 'react';

const useElementAnimationTimeline = (
  elementRef,
  animation,
  offset,
) => {
  useEffect(() => {
    const html = document.documentElement;

    const handleWindowScroll = (e) => {
      const elementBoundingRect = elementRef.current.getBoundingClientRect();
      const bottomOfTheViewPort = window.innerHeight + window.scrollY;
      const topOfTheElement = elementBoundingRect.top;

      const heightOfTheElement = elementBoundingRect.height;
      const bottomOfTheElement = elementBoundingRect.bottom;

      // True while element is in View (element top came into view and bottom hasnt left the view)
      const isElementVisibleInViewPort =
        bottomOfTheViewPort - topOfTheElement > 0 &&
        bottomOfTheElement > 0;

      const animationProgress = Math.max(
        0,
        bottomOfTheViewPort -
          topOfTheElement -
          heightOfTheElement -
          offset,
      );
      const animationProgressPercentage = Math.min(
        100,
        (animationProgress * 100) / heightOfTheElement,
      );

      requestAnimationFrame(() =>
        renderNextFrame(
          isElementVisibleInViewPort,
          animationProgressPercentage,
        ),
      );
    };

    const renderNextFrame = (
      isElementVisibleInViewPort,
      animationProgressPercentage,
    ) => {
      if (animation)
        animation(
          isElementVisibleInViewPort,
          animationProgressPercentage,
        );
      // const currentDegree = (animationProgressPercentage * 360) / 100;
      // item.style.transform = `rotate(${currentDegree}deg)`;
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () =>
      window.removeEventListener('scroll', handleWindowScroll);
  }, []);
};

export default useElementAnimationTimeline;
