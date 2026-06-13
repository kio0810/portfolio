import { useEffect } from 'react';

export default function Fun() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="fun" className="fun reveal is-visible">
      <div className="container">
        <span className="section-eyebrow">05. fun</span>
        <h1 className="section-title">AI랑 같이 즐기는 것들</h1>
        <p className="section-desc">
          그냥 만들고 싶어서 만든 것들을 모아두는 공간이에요.
          하나씩 채워나갈 예정이에요.
        </p>

        <div className="fun__placeholder">
          <p>곧 첫 번째 콘텐츠가 추가됩니다.</p>
        </div>
      </div>
    </section>
  );
}
