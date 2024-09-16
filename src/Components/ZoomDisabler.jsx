import React, { useEffect } from 'react';

const ZoomDisabler = () => {
  useEffect(() => {
    let lastTouchEnd = 0;

    const handleTouchMove = (event) => {
      // Previene el zoom con dos dedos
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const handleTouchEnd = (event) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    const handleWheel = (event) => {
      // Previene el zoom con la rueda del ratón o el trackpad
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event) => {
      // Previene el zoom con atajos de teclado (Ctrl + '+', Ctrl + '-', Ctrl + '0')
      if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
      }
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default ZoomDisabler;