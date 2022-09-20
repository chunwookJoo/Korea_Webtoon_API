<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# 한국 웹툰 커뮤니티 서비스 "이거 봤어?"

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=000000"/>  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=ffffff"/> <img src="https://img.shields.io/badge/NestJS-646464?style=flat&logo=NestJS&logoColor=db3636"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=ffffff"/>
[![Netlify Status](https://api.netlify.com/api/v1/badges/06b3e379-54f2-491d-8a06-88a8e067cc1d/deploy-status)](https://app.netlify.com/sites/webtoon-review/deploys)
## 기술 스택
- NestJS
- MongoDB

## 프로젝트 기능 설명
// 개발 완료

1. 각 플랫폼별 (네이버, 카카오, 카카오페이지) 웹툰 리스트를 크롤링하여 DB에 저장 후 출력
2. Oauth 로그인 (카카오, 네이버), JWT토큰 발급 후 DB 저장
3. 웹툰 검색 (작품, 작가)

// 개발중

4. 웹툰마다 사용자가 댓글, 좋아요 기능
5. 웹툰 보러가기 클릭 시 해당 플랫폼으로 이동

## Demo
https://webtoon-review.netlify.app/

## 참고
**https://github.com/HyeokjaeLee/korea-webtoon-api**
```
위 사이트를 많이 참고했습니다.
사실상 거의 코드는 같지만 위 API를 그대로 쓰는 것이 아닌 제 API를 따로 만들어서 개발했습니다.
크롤링 부분도 참고를 많이 했습니다. 윗 분의 코드를 보며 하나씩 파헤쳤고 네이버 웹툰의 "신작" 부분을 제가 따로 추가해서 넣었습니다.
정말 감사드립니다.
```



