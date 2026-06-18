import { useEffect, useRef } from 'react';

export default function useCustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 1024 || !cursorRef.current) {
      return undefined;
    }

    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationFrame = 0;

    const handleMouseMove = event => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const addHover = () => cursor.classList.add('hovered');
    const removeHover = () => cursor.classList.remove('hovered');

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      animationFrame = window.requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button, .project-item, .drawer-link, .drawer-social a').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });
    animateCursor();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button, .project-item, .drawer-link, .drawer-social a').forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return cursorRef;
}
