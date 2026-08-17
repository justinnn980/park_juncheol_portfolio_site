# 경력기술서 - 박준철 (TVING IT Support Engineer)

지원회사/직무 : TVING - IT Support Engineer
전공 : 컴퓨터공학과 / 복수전공 : 모빌리티AI/SW융합전공

---

## 경력 요약

아우토크립트에서 자산관리 자동화 시스템을 직접 개발했고, (주)홈초이스에서는 OTT 앱 '오초이스' 개발과 AWS 인프라 운영을 담당했습니다.

---

## 아우토크립트 — IT 인프라 및 자산관리 담당

자동차 소프트웨어 보안 분야 코스닥 상장기업. 엑셀로 흩어진 조직도/HW 자산/SW 라이선스 관리를 자동화하는 **'조직도/IT 자산관리 시스템'을 Java/Spring Boot, React/TypeScript로 기획부터 개발/배포까지 단독 진행**했습니다(실사용 데이터 2,394건 연동, 라이선스 만료 자동 경고).

**한 일**
- 4단계 마법사 UI로 온보딩 프로세스 표준화(사번 자동 채번)
- Docker 멀티스테이지 빌드 + Render.com API로 배포 자동화, Spring Security로 외부 접근 차단
- 헬프데스크 Form → Teams 알림 연동, 채팅방/FAQ 사이트 개발
- IDC 환경 변경 및 클라우드 전환 실사화

**애로사항 및 해결**
- 상태변경 API에서만 간헐적 CORS 오류 → Vite 프록시의 Origin 헤더 전달 방식까지 추적해 근본 해결
- 실데이터 이관 중 페이지네이션 상한 누락 발견 → 전량 재이관, 100% 검증
- 채팅방/FAQ 사이트 운영자 공백 리스크(퇴사/서버 장애) → 오류가 적은 MS Form을 먼저 노출하도록 예방 설계

---

## (주)홈초이스 — 서버/네트워크 인프라 운영 및 OTT 앱 개발
**기간** : 2024.02 ~ 2025.11 (1년 10개월)

전국 디지털케이블TV 가입가구에 VOD를 공급하는 국내 유일 사업자. **OTT 앱 '오초이스' 개발/운영을 담당해 딜라이브/LG헬로비전 전환 프로젝트를 주도**했습니다(FCP 39%/LCP 10.8% 개선).

**한 일**
- AWS EC2/S3/Elastic Beanstalk 기반 인프라 운영
- 콘텐츠 메타데이터 수집 자동화(Python/Selenium/Docker/Cron Job)

**애로사항 및 해결**
- Proxy 서버 IP 변경으로 방화벽에 막혀 통신 장애 발생 → EC2 Elastic IP 고정으로 근본 해결
- 미암호화 통신 구간 → SSL 적용, 전 구간 HTTPS 전환
- 매출 3,500억 딜라이브(NCG/Multi DRM 이원화), 가입자 343만 명 LG헬로비전(웹 기반 전환) 등 서로 다른 시스템 2건을 오초이스로 통합 전환

---

## 보유 기술

**Infra/Cloud** : AWS(EC2, S3, Elastic Beanstalk, VPC), Docker, Render.com, 방화벽/IDC/클라우드 전환
**Backend/Frontend** : Java, Spring Boot, Spring Security, PostgreSQL, React, TypeScript, Flutter
**자동화/AI** : Python, Selenium, Cron Job, Claude Code, Codex
**협업 도구** : Slack, Jira, Microsoft Teams, Google Workspace

---

## 수료 및 저서

정보통신산업진흥원 | 인공지능 기본과정 수료
네이버 부스트코스 &lt;DATA SCIENCE&gt; 코칭스터디 : 2023 수료
저서 | [개발자가 되기 위해 꼭 알아야하는 IT 용어 - 공동 저자](https://www.yes24.com/Product/Goods/109711067)
