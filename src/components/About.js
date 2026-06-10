const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '30+', label: 'Production Services' },
  { value: '10M+', label: 'Daily API Requests' },
  { value: '99.95%', label: 'Service Uptime' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="section-eyebrow">01. about me</span>
        <h2 className="section-title">서버 너머의 사용자를 생각하는 개발자</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              저는 <strong>안정성과 확장성</strong>을 최우선으로 두는 백엔드 개발자입니다.
              스타트업에서 모놀리식을 마이크로서비스로 분해하고, 일평균 트래픽을
              <strong> 10배 이상</strong> 확장한 경험이 있습니다.
            </p>
            <p>
              단순히 동작하는 코드보다는, <strong>5년 뒤에도 유지보수 가능한 코드</strong>를
              지향합니다. 도메인 주도 설계와 클린 아키텍처를 통해 비즈니스 로직과
              인프라를 명확하게 분리하는 것을 좋아합니다.
            </p>
            <p>
              최근에는 <strong>이벤트 드리븐 아키텍처</strong>와 Kafka 기반의 데이터 파이프라인,
              그리고 Kubernetes 운영 자동화에 깊이 빠져있습니다.
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