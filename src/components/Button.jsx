import React from 'react';
import styles from '../styles/Button.module.css';

export default function Button({ className, value, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
