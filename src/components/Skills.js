const categories = [
  {
    title: 'Languages',
    subtitle: '~/lang',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ['Kotlin', 'Java', 'Go', 'Python', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    subtitle: '~/framework',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z" />
      </svg>
    ),
    items: ['Spring Boot', 'Spring Cloud', 'JPA / QueryDSL', 'gRPC', 'Ktor'],
  },
  {
    title: 'Databases',
    subtitle: '~/data',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
    items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Elasticsearch'],
  },
  {
    title: 'Infra & DevOps',
    subtitle: '~/infra',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    items: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions'],
  },
  {
    title: 'Messaging',
    subtitle: '~/queue',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h16M4 12h16M4 17h10" />
      </svg>
    ),
    items: ['Apache Kafka', 'RabbitMQ', 'AWS SQS', 'Redis Streams'],
  },
  {
    title: 'Observability',
    subtitle: '~/monitoring',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
    ),
    items: ['Grafana', 'Prometheus', 'Loki', 'Datadog', 'OpenTelemetry'],
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