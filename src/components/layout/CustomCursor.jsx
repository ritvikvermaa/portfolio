import useCustomCursor from '../../hooks/useCustomCursor.js';

export default function CustomCursor() {
  const cursorRef = useCustomCursor();

  return <div id="cursor" ref={cursorRef} />;
}
