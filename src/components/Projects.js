const projects = [
  {
    name: '관광마케팅시스템 재구축',
    period: '2025.09 ~ 2025.12',
    tech: ['Java', 'Oracle', 'MyBatis', 'Nexacro'],
    responsibilities: [
      '레거시 시스템 분석 및 신규 환경 마이그레이션',
      '구버전 라이브러리·프레임워크 호환성 대응',
    ],
  },
  {
    name: '재난안전정보시스템 개편 사업',
    period: '2025.03 ~ 2025.09',
    tech: ['Java', 'eGovFrame', 'Tibero', 'MyBatis', 'iBATIS', 'WebSquare', 'jQuery', 'JBoss', 'Jenkins'],
    responsibilities: [
      '공공데이터포털 API 연계 인터페이스 개발 (내부망 환경)',
      '재난 보고서·통계·재난조사 관련 기능 개발',
      '외부망 홈페이지 개발',
    ],
  },
  {
    name: '그룹웨어 구축 사업',
    period: '2022.01 ~ 2023.04',
    tech: ['Java', 'Spring Framework', 'eGovFrame', 'MariaDB', 'MyBatis', 'JSP', 'jQuery'],
    responsibilities: [
      '그룹웨어 핵심 기능 개발 및 유지보수',
      '전자결재 및 문서유통 기능 개발',
      '사용자/권한 관리 기능 개발',
      'REST API 설계 및 개발',
      'XML 기반 외부 시스템 연계 기능 구현',
    ],
  },
  {
    name: '홈페이지 구축',
    period: '2021.08 ~ 2022.02',
    tech: ['Java', 'eGovFrame', 'MariaDB', 'MyBatis', 'JPA', 'QueryDSL', 'jQuery'],
    responsibilities: [
      '입주공고 신청 프로세스 개발',
      '시설 예약 기능 개발',
      '홈페이지 유지보수',
    ],
  },
];

const FolderIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-eyebrow">03. selected work</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          지금까지 참여한 프로젝트들입니다. 각 프로젝트에서 맡은 역할과
          담당했던 주요 업무를 정리했습니다.
        </p>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.name} className="project-card">
              <div className="project-card__head">
                <div className="project-card__folder"><FolderIcon /></div>
                <div className="project-card__title-wrap">
                  <h3 className="project-card__title">{p.name}</h3>
                  <div className="project-card__period">{p.period}</div>
                </div>
              </div>

              <div className="project-card__group">
                <h4 className="project-card__group-title">주요 업무</h4>
                <ul className="project-card__list">
                  {p.responsibilities.map((r) => <li key={r}>{r}</li>)}
                </ul>
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
