import React from 'react';

export const useResize = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    function checkSize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener(checkSize);
    }
  }, [])

  return {
    isSmallScreen
  }
}