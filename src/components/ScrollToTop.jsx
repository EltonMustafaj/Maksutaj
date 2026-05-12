import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  // Save scroll position for the current path
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  // Restore or reset scroll position on navigation
  useEffect(() => {
    if (navType === 'POP') {
      const savedPosition = sessionStorage.getItem(`scroll-${pathname}`);
      if (savedPosition) {
        // Short timeout to ensure the new page DOM is rendered before scrolling
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition, 10));
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
};

export default ScrollToTop;
