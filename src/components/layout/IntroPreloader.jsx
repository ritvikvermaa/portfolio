const nameLetters = ['R', 'I', 'T', 'V', 'I', 'K', '\u00a0', 'V', 'E', 'R', 'M', 'A'];

export default function IntroPreloader({ isDone }) {
  if (isDone) {
    return null;
  }

  return (
    <div className="intro-preloader" aria-hidden="true">
      <div className="intro-panels">
        {Array.from({ length: 10 }).map((_, index) => (
          <span className="intro-panel" key={index} />
        ))}
      </div>
      <p className="intro-name" aria-label="Ritvik Verma">
        {nameLetters.map((letter, index) => (
          <span key={`${letter}-${index}`}>{letter}</span>
        ))}
      </p>
    </div>
  );
}
