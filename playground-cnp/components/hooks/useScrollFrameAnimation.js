import React, { useEffect } from 'react';

/**
 * This hook will play frames on window scroll
 * Sample usage:   useScrollFrameAnimation(canvasRef, baseUrl, 148, 1158, 770);
 **/
const useScrollFrameAnimation = (
  canvasRef,
  imagesBaseUrl,
  totalFrames,
  frameWidth,
  frameHeight,
) => {
  useEffect(() => {
    const frameCount = totalFrames;
    const canvas = canvasRef.current;
    if (canvas) {
      const html = document.documentElement;
      const context = canvas.getContext('2d');

      const currentFrame = (index) =>
        `${imagesBaseUrl}/${index.toString().padStart(4, '0')}.jpg`;

      const preloadImages = () => {
        for (let i = 1; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
        }
      };
      // Set canvas dimensions
      canvas.width = frameWidth;
      canvas.height = frameHeight;
      // Create, load and draw the image
      const img = new Image();
      img.src = currentFrame(1);
      img.onload = function () {
        context.drawImage(img, 0, 0);
      };

      const updateImage = (index) => {
        img.src = currentFrame(index);
        context.drawImage(img, 0, 0);
      };

      window.addEventListener('scroll', () => {
        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollFraction * frameCount),
        );
        requestAnimationFrame(() => updateImage(frameIndex + 1));
      });
      preloadImages();
    }
  }, []);
};

export default useScrollFrameAnimation;
