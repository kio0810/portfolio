import { useEffect, useState } from 'react';

const roles = [
  'Backend Engineer',
  'Distributed Systems',
  'API Architect',
  'Cloud Native Developer',
];

function useTypewriter(words, typeSpeed = 90, pause = 1600) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const current = words[idx];
    let timer;
    if (phase === 'typing') {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timer = setTimeout(() => setPhase('deleting'), pause);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), typeSpeed / 2);
      } else {
        setPhase('typing');
        setIdx((i) => (i + 1) % words.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase, idx, words, typeSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div>
          <span className="hero__status">
            <span className="hero__status-dot" />
            Available for new opportunities
          </span>

          <h1 className="hero__title">
            안녕하세요,<br />
            <span className="hero__title-gradient">김은중</span>입니다.
          </h1>

          <p className="hero__role">
            &gt; {typed}
            <span className="hero__role-cursor" />
          </p>

          <p className="hero__desc">
            대규모 트래픽을 견디는 안정적인 서버 아키텍처를 설계합니다.
            Spring과 Kotlin을 주로 사용하며, 분산 시스템과 성능 최적화에
            깊은 관심을 가지고 있습니다.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              프로젝트 보러가기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>

          <div className="hero__socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.05.78 2.12v3.14c0 .31.21.68.8.56C20.21 21.4 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45C23.21 24 24 23.22 24 22.27V1.73C24 .77 23.21 0 22.22 0z" />
              </svg>
            </a>
            <a href="mailto:gearpoint12@gmail.com" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal__head">
            <div className="terminal__dots"><span /><span /><span /></div>
            <div className="terminal__title">~/portfolio — zsh</div>
          </div>
          <div className="terminal__body">
            <span className="terminal__line">
              <span className="t-prompt">$</span> <span className="t-cmd">cat</span> <span className="t-str">profile.json</span>
            </span>
            <span className="terminal__line">
              <span className="t-punct">{'{'}</span>
            </span>
            <span className="terminal__line">{'  '}
              <span className="t-key">"name"</span><span className="t-punct">:</span> <span className="t-str">"Kim Eunjung"</span><span className="t-punct">,</span>
            </span>
            <span className="terminal__line">{'  '}
              <span className="t-key">"role"</span><span className="t-punct">:</span> <span className="t-str">"Backend Engineer"</span><span className="t-punct">,</span>
            </span>
            <span className="terminal__line">{'  '}
              <span className="t-key">"location"</span><span className="t-punct">:</span> <span className="t-str">"Seoul, KR"</span><span className="t-punct">,</span>
            </span>
            <span className="terminal__line">{'  '}
              <span className="t-key">"focus"</span><span className="t-punct">:</span> <span className="t-punct">[</span><span className="t-str">"Scalability"</span><span className="t-punct">,</span> <span className="t-str">"DX"</span><span className="t-punct">],</span>
            </span>
            <span className="terminal__line">{'  '}
              <span className="t-key">"stack"</span><span className="t-punct">:</span> <span className="t-punct">{'{'}</span>
            </span>
            <span className="terminal__line">{'    '}
              <span className="t-key">"lang"</span><span className="t-punct">:</span> <span className="t-str">"Kotlin / Java / Go"</span><span className="t-punct">,</span>
            </span>
            <span className="terminal__line">{'    '}
              <span className="t-key">"db"</span><span className="t-punct">:</span> <span className="t-str">"PostgreSQL, Redis"</span><span className="t-punct">,</span>
            </span>
            <span className="terminal__line">{'    '}
              <span className="t-key">"infra"</span><span className="t-punct">:</span> <span className="t-str">"AWS, Kubernetes"</span>
            </span>
            <span className="terminal__line">{'  '}
              <span className="t-punct">{'}'}</span><span className="t-punct">,</span>
            </span>
            <span className="terminal__line">{'  '}
              <span className="t-key">"coffee"</span><span className="t-punct">:</span> <span className="t-num">true</span>
            </span>
            <span className="terminal__line">
              <span className="t-punct">{'}'}</span>
            </span>
            <span className="terminal__line">
              <span className="t-prompt">$</span> <span className="t-comment">_</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}