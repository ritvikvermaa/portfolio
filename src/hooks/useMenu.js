import { useCallback, useEffect, useState } from 'react';

export default function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen(current => !current), []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu]);

  return {
    isOpen,
    closeMenu,
    toggleMenu,
  };
}
