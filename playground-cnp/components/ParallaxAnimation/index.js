import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Info } from '@rmanium/web-elements';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { ParallaxElement, ParallaxWrapper } from './../Parallax';

const useStyles = makeStyles(
  ({ palette, typography, breakpoints }) => ({
    root: {
      margin: 10,
    },
  }),
);

function ParallaxAnmimation() {
  const canvasRef = useRef(null);
  const classes = useStyles();

  return (
    <div className={styles.pageWrapper}>
      <ParallaxWrapper
        classes={styles.parallaxWrapper}
        perspective={8}
      >
        <ParallaxElement
          classes={styles.checkMe}
          top={300}
          distance={3}
          perspective={8}
          isCover
        >
          <h2>Check me out</h2>
          {/* <img
            className={styles.background__image}
            src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/building.jpg"
          /> */}
        </ParallaxElement>
        <ParallaxElement top={400} distance={5} perspective={8}>
          <h2>Oooo, parallax</h2>
        </ParallaxElement>
      </ParallaxWrapper>
    </div>
  );
}

ParallaxAnmimation.defaultProps = {};
ParallaxAnmimation.propTypes = {};

export default ParallaxAnmimation;
