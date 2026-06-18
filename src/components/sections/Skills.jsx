import { skills } from '../../data/skills.js';
import SectionLabel from '../ui/SectionLabel.jsx';
import Tag from '../ui/Tag.jsx';

export default function Skills() {
  return (
    <section id="skills">
      <SectionLabel>02 — Skills</SectionLabel>
      <div className="skills-grid reveal">
        {skills.map(group => (
          <div className="skill-group" key={group.label}>
            <div className="skill-group-label">{group.label}</div>
            <div className="skill-tags">
              {group.items.map(skill => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
