import { projects } from '../../data/projects.js';
import SectionLabel from '../ui/SectionLabel.jsx';
import Tag from '../ui/Tag.jsx';

export default function Projects() {
  return (
    <section id="projects">
      <SectionLabel>03 — Projects</SectionLabel>
      <div className="projects-list">
        {projects.map(project => (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item reveal"
            aria-label={project.ariaLabel}
            key={project.href}
          >
            <div className="project-num">{project.number}</div>
            <div className="project-content">
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.description}</div>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
            <div className="project-arrow">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}
