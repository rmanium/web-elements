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
    <div className={styles.page}>
      {/* <div className={styles.header}>Header</div> */}
      <div className={styles.pageWrapper}>
        <div className={styles.article}>
          <div className={styles.category}>Category Header</div>
          <h1 className={styles.title}>Article 1 Title</h1>
          <p>Body content would go here.</p>

          <div className={styles.footer}>
            <p>Article 1 Footer</p>
          </div>
        </div>

        <div className={styles.article}>
          <div className={styles.category}>Category Header</div>
          <h1 className={styles.title}>Article 2 Title</h1>
          <p>Body content would go here.</p>

          <div className={styles.footer}>
            <p>Article 1 Footer</p>
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className={styles.pageWrapper}>
        <div className={styles.article}>
          <div className={styles.category}>Category Header</div>
          <h1 className={styles.title}>Article 1 Title</h1>
          <p>Body content would go here.</p>

          <div className={styles.footer}>
            <p>Article 1 Footer</p>
          </div>
        </div>

        <div className={styles.article}>
          <div className={styles.category}>Category Header</div>
          <h1 className={styles.title}>Article 2 Title</h1>
          <p>Body content would go here.</p>

          <div className={styles.footer}>
            <p>Article 1 Footer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ParallaxAnmimation.defaultProps = {};
ParallaxAnmimation.propTypes = {};

export default ParallaxAnmimation;
