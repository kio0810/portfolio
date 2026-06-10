export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-eyebrow">05. get in touch</span>
        <h2 className="contact__title">
          함께 <span>좋은 서비스</span>를 만들어요.
        </h2>
        <p className="contact__desc">
          새로운 기회나 협업 제안은 언제나 환영합니다.
          간단한 인사도 좋아요. 답장은 24시간 이내에 드릴게요.
        </p>
        <a href="mailto:gearpoint12@gmail.com" className="contact__mail">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          gearpoint12@gmail.com
        </a>
      </div>
    </section>
  );
}