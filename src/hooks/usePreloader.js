import { useEffect, useState } from 'react';

export default function usePreloader() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsDone(true);
      return undefined;
    }

    document.body.classList.add('is-loading');

    const introDelay = new Promise(resolve => window.setTimeout(resolve, 2450));
    const fontReady = document.fonts
      ? Promise.race([
          document.fonts.ready.catch(() => undefined),
          new Promise(resolve => window.setTimeout(resolve, 3200)),
        ])
      : Promise.resolve();

    let isMounted = true;

    Promise.all([introDelay, fontReady]).then(() => {
      if (isMounted) {
        setIsDone(true);
        document.body.classList.remove('is-loading');
      }
    });

    return () => {
      isMounted = false;
      document.body.classList.remove('is-loading');
    };
  }, []);

  return isDone;
}
