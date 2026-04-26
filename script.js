const addVideoBtn = document.getElementById("addVideoBtn");
const videoList = document.querySelector(".video-list");

let videoCount = 2;

addVideoBtn.addEventListener("click", () => {
  videoCount += 1;

  const article = document.createElement("article");
  article.className = `video-card ${videoCount % 2 === 0 ? "reverse" : ""}`;

  const number = String(videoCount).padStart(2, "0");

  article.innerHTML = `
    <div class="video-box">
      <video controls poster="https://via.placeholder.com/1280x720?text=Video+${videoCount}">
        <source src="videos/video${videoCount}.mp4" type="video/mp4" />
        브라우저가 video 태그를 지원하지 않습니다.
      </video>
    </div>

    <div class="video-content">
      <span class="number">${number}</span>
      <h3>영상 내용</h3>
      <p>
        여기에 ${videoCount}번째 영상 설명을 작성하세요.
        프로젝트 목적, 담당 역할, 기술 스택, 문제 해결 과정, 성과를 정리하면 좋습니다.
      </p>
      <ul>
        <li>프로젝트: 프로젝트명을 입력하세요</li>
        <li>역할: 담당 역할을 입력하세요</li>
        <li>성과: 핵심 성과를 입력하세요</li>
      </ul>
    </div>
  `;

  videoList.appendChild(article);
  article.scrollIntoView({ behavior: "smooth", block: "center" });
});
