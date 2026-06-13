import { useEffect } from 'react';

export default function Fun() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="fun" className="fun reveal is-visible">
      <div className="container">
        <span className="section-eyebrow">05. fun</span>
        <h1 className="section-title">AI로 만든 실험들</h1>
        <p className="section-desc">
          "이런것도 되나?" 싶은 것들을 AI와 함께 만들어 보는 공간입니다.
          앞으로 하나씩 채워나갈 예정이에요.
        </p>

        <div className="fun__placeholder">
          <p>곧 첫 번째 실험이 추가됩니다.</p>
        </div>
      </div>
    </section>
  );
}
