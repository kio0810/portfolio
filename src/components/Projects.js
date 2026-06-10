const projects = [
  {
    title: 'Payment Gateway',
    desc: '결제 트래픽 분산을 위한 마이크로서비스 아키텍처. Saga 패턴 기반 분산 트랜잭션과 Outbox 패턴으로 데이터 정합성을 보장합니다.',
    tech: ['Kotlin', 'Spring Boot', 'Kafka', 'PostgreSQL', 'k8s'],
    metrics: [
      { value: '12k', label: 'TPS' },
      { value: '<80ms', label: 'p99 latency' },
    ],
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
  {
    title: 'Realtime Chat Server',
    desc: '동시 접속 50만 명을 처리하는 WebSocket 기반 채팅 서버. Redis Pub/Sub과 sticky session으로 수평 확장이 가능합니다.',
    tech: ['Go', 'WebSocket', 'Redis', 'Nginx', 'AWS ECS'],
    metrics: [
      { value: '500k', label: 'concurrent' },
      { value: '99.99%', label: 'uptime' },
    ],
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
  {
    title: 'Data Pipeline',
    desc: '하루 2억 건의 이벤트 로그를 처리하는 ETL 파이프라인. Kafka Streams로 실시간 집계, S3로 cold storage 아카이빙을 자동화했습니다.',
    tech: ['Kafka Streams', 'Spark', 'Airflow', 'S3', 'Snowflake'],
    metrics: [
      { value: '200M', label: 'events/day' },
      { value: '70%↓', label: 'cost saved' },
    ],
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
  {
    title: 'API Gateway DSL',
    desc: '내부 마이크로서비스용 API 게이트웨이 프레임워크. Kotlin DSL로 라우팅 규칙을 선언적으로 작성할 수 있습니다.',
    tech: ['Kotlin', 'Netty', 'Coroutines', 'JWT'],
    metrics: [
      { value: '5x', label: 'faster setup' },
      { value: '40%↑', label: 'throughput' },
    ],
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
];

const FolderIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);
const GhIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.05.78 2.12v3.14c0 .31.21.68.8.56C20.21 21.4 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);
const ExtIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-eyebrow">03. selected work</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          최근에 작업한 프로젝트들입니다. 각 프로젝트는 실제 운영 환경에서
          마주한 문제를 해결한 결과물입니다.
        </p>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <div className="project-card__head">
                <div className="project-card__folder"><FolderIcon /></div>
                <div className="project-card__links">
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub repo"><GhIcon /></a>
                  <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Demo"><ExtIcon /></a>
                </div>
              </div>

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>

              <div className="project-card__metrics">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="metric__value">{m.value}</span>
                    <span className="metric__label">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="chip-row">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}