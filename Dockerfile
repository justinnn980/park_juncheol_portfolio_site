FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html app_portfolio.html resume.html resume_backend.html resume_flutter.html resume_ai.html resume_react.html resume_hunet.html resume_apr.html resume2.html resume_codevision.html resume_danal.html resume_daewoong.html resume_daewoong_print.html resume_nudge.html resume_cjfoodville.html resume_cjfoodville_print.html resume_aiworkx.html resume_aiworkx_print.html resume_datauniverse.html style.css script.js resume.css resume.js /usr/share/nginx/html/
COPY videos/ /usr/share/nginx/html/videos/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
