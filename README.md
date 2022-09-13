개발환경 세팅

$ git clone https://github.com/oooppq/2022fastival.git

$ npm install

$ npm start

진행상황

1. url 라우팅 완료
2. 프로젝트에 필요한 method들 대강 구현 완료
3. url 진입에 따른 변화(선택된 요소 색깔 변경과 같은) 구현 완료, but, 디자인 추가 필요
4. 각 요소의 상세페이지는 모달 형태로 구현되는 것 같아 따로 라우팅은 안해놨음

구조

- src안의 pages폴더에 페이지 구성요소를 담은 jsx파일들 존재
- 페이지에 상관없이 Header와 Footer은 항상 출력되고,
- 홈화면의 요소들은 Home.jsx에 구현되며, 나머지는 각각의 jsx에 구현
- 축제의 모든 data들은 data.js에 구현되어있고, 필요한 형식대로 수정해서 사용하면 됨
- 공통적으로 사용되는 method들은 utils.js에 구현되어있음.
- 모든 Styling은 styledComponent.js에 구현되어 있음.

해야할 것

- 전체적인 디자인
- 축제 데이터 추가
- 배포
