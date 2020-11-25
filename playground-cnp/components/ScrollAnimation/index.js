import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Info } from '@rmanium/web-elements';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import useScrollFrameAnimation from '../components/useScrollFrameAnimation';

const baseUrl =
  'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass';
const useStyles = makeStyles(
  ({ palette, typography, breakpoints }) => ({
    root: {
      margin: 10,
    },
  }),
);

function Example() {
  const canvasRef = useRef(null);
  const classes = useStyles();

  useScrollFrameAnimation(canvasRef, baseUrl, 148, 1158, 770);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.wrapper}>
        <p className={styles.test}>Check me</p>
        <canvas ref={canvasRef} className={styles.main} />
      </div>
    </div>
  );
}

Example.defaultProps = {};
Example.propTypes = {};

export default Example;
