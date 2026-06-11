const items = [
  {
    date: '2021.08 ~ Present',
    role: 'Backend Developer',
    company: '○○ 소프트 · SI 전문 중소기업',
    bullets: [
      '홈페이지·그룹웨어 등 신규 서비스 구축 및 유지보수 담당',
      '공공·관광·재난안전 등 다양한 도메인 SI 프로젝트 참여',
      '운영 중 시스템의 데이터 이관 / 마이그레이션 작업 수행',
      '단발성 소규모 프로젝트 다수 진행 — 빠른 요구사항 분석 및 대응 경험',
      'Java / Spring / eGovFrame 기반 백엔드 개발과 React·jQuery 등 프론트엔드 개발 병행',
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
          입사 이후 다양한 SI 프로젝트와 운영 업무를 함께 경험하며 성장해왔습니다.
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