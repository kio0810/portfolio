const categories = [
  {
    title: 'Backend',
    subtitle: '~/backend',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    items: ['Java', 'Spring Framework', 'Spring Boot', 'eGovFrame', 'JSP', 'REST API'],
  },
  {
    title: 'Frontend',
    subtitle: '~/frontend',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    items: ['React', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'WebSquare', 'Nexacro'],
  },
  {
    title: 'Database',
    subtitle: '~/database',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
    items: ['MariaDB', 'Tibero', 'Oracle', 'MySQL', 'MSSQL'],
  },
  {
    title: 'Persistence',
    subtitle: '~/persistence',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    items: ['MyBatis', 'JPA', 'QueryDSL'],
  },
  {
    title: 'Tools',
    subtitle: '~/tools',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    items: ['Git', 'SVN'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-eyebrow">02. tech stack</span>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-desc">
          매일 사용하는 도구들입니다. 문제를 해결하는 데 가장 적합한 기술을
          선택하려고 노력합니다.
        </p>

        <div className="skills__grid">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-card">
              <div className="skill-card__head">
                <div className="skill-card__icon">{cat.icon}</div>
                <div>
                  <h3 className="skill-card__title">{cat.title}</h3>
                  <p className="skill-card__subtitle">{cat.subtitle}</p>
                </div>
              </div>
              <div className="chip-row">
                {cat.items.map((it) => (
                  <span key={it} className="chip">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}