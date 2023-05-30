/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  if (typeof window === 'undefined') {
    return;
  }

  const getWindowDimensions = () => {
    const { innerWidth: width } = window;
    return width;
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
