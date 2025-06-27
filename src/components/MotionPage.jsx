import React, { useEffect } from 'react';

const MotionPage = ({ children }) => {
  useEffect(() => {
    // Scroll immédiat vers le haut sans animation
    window.scrollTo(0, 0);
    
    // Scroll supplémentaire après un court délai pour s'assurer que ça marche
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default MotionPage; 
