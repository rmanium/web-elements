import React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

const Parallax = ({
  top = 0,
  distance = 0,
  perspective = 2,
  children,
  classes = null,
  isCover = false,
}) => {
  const scale = (perspective - distance) / perspective;
  return (
    <div
      className={cx(
        isCover && styles.cover,
        styles.parallaxElement,
        Boolean(classes) && classes,
      )}
      style={{
        top: top,
        transform: `translateZ(${distance}px) scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
