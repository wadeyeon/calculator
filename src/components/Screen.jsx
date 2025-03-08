import React from 'react';
import styles from '../styles/Screen.module.css';

export default function Screen({ value }) {
  return <div className={styles.screen}>{value}</div>;
}
