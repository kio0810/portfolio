# Portfolio · Kim Eunjung

> 백엔드와 프론트엔드를 모두 경험한 풀스택 개발자의 개인 포트폴리오 사이트

🔗 **Live**: https://kio0810.github.io/portfolio

---

## About

Java 기반 서버 개발과 React 기반 프론트엔드 개발을 함께 수행해 온 개발자의 포트폴리오입니다.
공공·관광·재난안전 등 다양한 SI 도메인에서 쌓은 경험과 관심 기술을 한 페이지에 정리했습니다.

## Sections

| 섹션 | 내용 |
|---|---|
| **Hero** | 인사말 · 역할 타이핑 애니메이션 · 터미널 스타일 `profile.json` |
| **About** | 자기소개와 통계 카드 (경력 자동 계산 · 참여 프로젝트 수 · Backend · Frontend) |
| **Skills** | Backend / Frontend / Database / Persistence / Tools 5개 카드 |
| **Projects** | 참여 프로젝트 카드 (프로젝트명 · 기간 · 주요 업무 · 기술 스택) |
| **Experience** | 입사부터 현재까지의 경력 타임라인 |
| **Contact** | 이메일 CTA |

## Features

- 🌗 **다크/라이트 테마 토글** — `localStorage` + `prefers-color-scheme` 기반, 새 탭에서도 설정 유지
- ⌨️ **타이핑 애니메이션** — Hero 의 역할 키워드 자동 순환
- 📅 **자동 경력 계산** — 입사일(2021.08.17) 기준 `Date()` 비교로 매년 자동 갱신
- 🎨 **CSS 변수 기반 테마 시스템** — `:root[data-theme]` 토큰으로 한 곳에서 색상 관리
- 📱 **반응형 레이아웃** — Hero 2열 그리드, Skills/Projects auto-fit 그리드, 모바일 1열 자동 전환

## Tech Stack

| 분류 | 사용 기술 |
|---|---|
| Framework | React 19 (Create React App) |
| Styling | Plain CSS (CSS Variables, color-mix) |
| Fonts | Inter, JetBrains Mono (Google Fonts) |
| Deploy | GitHub Pages + GitHub Actions |

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm start

# 프로덕션 빌드
npm run build
```

## Project Structure

```
src/
├── App.js                    # 루트 컴포넌트, IntersectionObserver fade-in
├── App.css                   # 전체 스타일
├── index.css                 # 리셋 + 테마 토큰 (:root[data-theme])
├── contexts/
│   └── ThemeContext.js       # 테마 상태 + localStorage 영속화
└── components/
    ├── Navbar.js             # 스티키 네비게이션 + 테마 토글
    ├── ThemeToggle.js        # 다크/라이트 스위치
    ├── Hero.js               # 인사말 · 터미널 아트
    ├── About.js              # 자기소개 + 통계 카드
    ├── Skills.js             # 기술 스택 카드
    ├── Projects.js           # 프로젝트 카드 (시간 역순)
    ├── Experience.js         # 경력 타임라인
    ├── Contact.js            # 이메일 CTA
    └── Footer.js
```

## Deployment

`main` 브랜치에 푸시하면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로 빌드 후 GitHub Pages 에 배포합니다.

## License

MIT
