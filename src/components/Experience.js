const items = [
  {
    date: '2024.03 — Present',
    role: 'Senior Backend Engineer',
    company: 'Awesome Tech Co.',
    bullets: [
      '결제 시스템 마이크로서비스 전환을 리드, 일평균 트래픽 10배 확장',
      'Kafka 기반 이벤트 드리븐 아키텍처 도입으로 서비스 간 결합도 70% 감소',
      'k8s HPA + Karpenter 도입으로 인프라 비용 40% 절감',
    ],
  },
  {
    date: '2022.01 — 2024.02',
    role: 'Backend Engineer',
    company: 'Cool Startup Inc.',
    bullets: [
      '실시간 채팅 서비스 백엔드 개발 (동시접속 50만)',
      'PostgreSQL 인덱싱 / 쿼리 튜닝으로 p99 응답시간 1.2s → 80ms',
      '신규 입사자 온보딩 문서 / DX 도구 정비',
    ],
  },
  {
    date: '2020.07 — 2021.12',
    role: 'Junior Backend Engineer',
    company: 'First Company',
    bullets: [
      'Spring Boot 기반 모놀리식 서비스 유지보수 및 기능 개발',
      'Jenkins → GitHub Actions 마이그레이션으로 빌드 시간 50% 단축',
      'API 문서 자동화 (Spring REST Docs) 도입',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="section-eyebrow">04. career</span>
        <h2 className="section-title">Experience</h2>
        <p className="section-desc">
          지금까지 거쳐온 길과, 그 길에서 배운 것들입니다.
        </p>

        <div className="timeline">
          {items.map((it) => (
            <div key={it.role} className="timeline__item">
              <div className="timeline__date">{it.date}</div>
              <div className="timeline__role">{it.role}</div>
              <div className="timeline__company">@ {it.company}</div>
              <ul className="timeline__list">
                {it.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}