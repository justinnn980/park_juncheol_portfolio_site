# 박준철 포트폴리오

정적 HTML/CSS/JavaScript 포트폴리오 사이트입니다.

## Docker로 실행

```bash
docker compose up --build -d
```

브라우저에서 `http://localhost:8080`으로 접속합니다.

## Docker 명령으로 실행

```bash
docker build -t park-juncheol-portfolio .
docker run -d --name park-juncheol-portfolio -p 8080:80 park-juncheol-portfolio
```

컨테이너를 중지하려면 다음을 실행합니다.

```bash
docker stop park-juncheol-portfolio
```

## GitHub Pages 배포

이 저장소를 GitHub에 `main` 브랜치로 푸시하면 GitHub Actions가 자동으로 Pages에 배포합니다.

1. GitHub 저장소의 `Settings > Pages`로 이동합니다.
2. `Build and deployment`의 `Source`를 `GitHub Actions`로 설정합니다.
3. 로컬에서 아래 명령으로 푸시합니다.

```bash
git push -u origin main
```
