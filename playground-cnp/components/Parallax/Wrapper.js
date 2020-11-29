import React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

const Parallax = ({
  perspective = 8,
  origin = '0%',
  classes = null,
  children,
}) => {
  return (
    <div
      className={cx(
        styles.parallaxWrapper,
        Boolean(classes) && classes,
      )}
      style={{ perspective: perspective, perspectiveOrigin: origin }}
    >
      {children}
    </div>
  );
};

export default Parallax;
