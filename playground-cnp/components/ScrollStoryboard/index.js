import React, { useRef, useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import useElementAnimationTimeline from './../hooks/useElementAnimationTimeline';

const OFFSET = 200;
function ScrollFrameAnimation({ totalFrames = 100 }) {
  const pageRef = useRef(null);
  const youRef = useRef(null);

  const animation = (
    isElementVisibleInViewPort,
    animationProgressPercentage,
  ) => {
    // console.log(
    //   'CHECK',
    //   isElementVisibleInViewPort,
    //   animationProgressPercentage,
    // );
    const currentDegree = (animationProgressPercentage * 360) / 100;
    const item = youRef.current?.querySelector('p');
    if (item) {
      item.style.transform = `rotate(${currentDegree}deg)`;
    }
  };

  useElementAnimationTimeline(youRef, animation, OFFSET);

  return (
    <div ref={pageRef}>
      <div className={styles.section}>hi</div>
      <div className={styles.section}>you</div>
      <div ref={youRef} className={styles.section}>
        <p>my text</p>
      </div>
      <div className={styles.section}>you</div>
      <div className={styles.section}>you</div>
      <div className={styles.section}>you</div>
      <div className={styles.section}>you</div>
      {/* <div className={styles.wrapper}>
        <p className={styles.test}>Check me</p>
        <canvas ref={canvasRef} className={styles.main} />
      </div> */}
    </div>
  );
}

ScrollFrameAnimation.defaultProps = {};
ScrollFrameAnimation.propTypes = {};

export default ScrollFrameAnimation;
