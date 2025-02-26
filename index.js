const express = require("express"); // express 모듈 셋팅
const ejs = require("ejs"); // page loading
const app = express();

// view 엔진을 ejs를 쓰겠다는 설정
app.set("view engine", "ejs");
app.use(express.static("./views/css"));

// 페이지 로딩 함수
app.get("/", function (req, res) {
  res.render("test", {});
});

// 서버 띄울때 포트 정보 셋팅 처음 실행 시 필요한 기능 수행
app.listen(3000, function () {
  console.log("server running");
});
