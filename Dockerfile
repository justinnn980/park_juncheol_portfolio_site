FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html app_portfolio.html resume.html resume_backend.html resume_flutter.html resume_ai.html resume_react.html style.css script.js resume.css resume.js /usr/share/nginx/html/
COPY videos/ /usr/share/nginx/html/videos/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
