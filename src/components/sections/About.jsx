import SectionLabel from '../ui/SectionLabel.jsx';
import { stats } from '../../data/profile.js';

export default function About() {
  return (
    <section id="about">
      <SectionLabel>01 — About</SectionLabel>
      <div className="about-grid">
        <div className="about-text reveal">
          <h2>Building intelligent systems powered by data.</h2>
          <p>
            I'm a Computer Science Engineering student specializing in Artificial Intelligence, with hands-on experience in
            data analysis, machine learning, and backend development. I work on transforming raw data into meaningful insights
            and predictive solutions.
          </p>
          <p>
            From data preprocessing and visualization to applying machine learning models, I focus on building systems that
            are both efficient and reliable. I am actively exploring data engineering concepts and scalable architectures to
            strengthen my ability to work on real-world AI systems.
          </p>
        </div>
        <div className="about-stats reveal">
          {stats.map(stat => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
