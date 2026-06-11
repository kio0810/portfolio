const CAREER_START = new Date(2021, 7, 17); // 2021-08-17

function careerYears() {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  const beforeAnniversary =
    now.getMonth() < CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() && now.getDate() < CAREER_START.getDate());
  if (beforeAnniversary) years -= 1;
  return Math.max(years, 0);
}

const stats = [
  { value: `${careerYears()}+`, label: '년 경력' },
  { value: '8+', label: '참여 프로젝트' },
  { value: 'Java', label: 'Backend' },
  { value: 'React', label: 'Frontend' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="section-eyebrow">01. about me</span>
        <h2 className="section-title">서비스 전체를 이해하는 풀스택 개발자</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              백엔드와 프론트엔드를 모두 경험하며 <strong>서비스 전체를 이해하는</strong> 개발자입니다.
            </p>
            <p>
              Java를 기반으로 서버 개발을 수행해 왔으며, React를 활용한 프론트엔드 개발 경험도
              보유하고 있습니다. 단순한 기능 구현보다 <strong>안정성, 확장성, 유지보수성</strong>을
              고려한 개발을 지향하며, 문제의 원인을 파악하고 해결하는 과정에서 가장 큰 보람을 느낍니다.
            </p>
            <p>
              새로운 기술을 배우는 것을 즐기며, 변화하는 기술 환경 속에서 꾸준히 성장하는
              개발자가 되기 위해 노력하고 있습니다. 현재는 <strong>AI, 자동화, SaaS</strong> 서비스
              개발에도 관심을 가지고 개인 프로젝트를 진행하고 있습니다.
            </p>
          </div>

          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}