## 사이트 미리보기

<img width="260" alt="스크린샷 2023-04-08 오후 1 37 24" src="https://user-images.githubusercontent.com/81559230/230703365-33c857ba-a1c6-483f-82bb-02b0bd663dd6.png"><img width="269" alt="스크린샷 2023-04-08 오후 1 37 52" src="https://user-images.githubusercontent.com/81559230/230703378-4e0edc98-3845-42d4-904c-52a296f3cefc.png"><img width="270" alt="스크린샷 2023-04-08 오후 1 38 13" src="https://user-images.githubusercontent.com/81559230/230703390-cc5fa4e3-1c0c-44fa-a59d-67fe6acaa639.png">


## 개발환경 세팅

$ git clone https://github.com/oooppq/2022fastival.git

$ npm install

$ npm start

## 진행상황

1. url 라우팅 완료  
2. 프로젝트에 필요한 method들 대강 구현 완료  
3. url 진입에 따른 변화(선택된 요소 색깔 변경과 같은) 구현 완료, but, 디자인 추가 필요  
4. 각 요소의 상세페이지는 모달 형태로 구현되는 것 같아 따로 라우팅은 안해놨음  

## 구조  
  
- src안의 pages폴더에 페이지 구성요소를 담은 jsx파일들 존재  
- 페이지에 상관없이 Header와 Footer은 항상 출력되고,  
- 홈화면의 요소들은 Home.jsx에 구현되며, 나머지는 각각의 jsx에 구현  
- 축제의 모든 data들은 data.js에 구현되어있고, 필요한 형식대로 수정해서 사용하면 됨  
- 공통적으로 사용되는 method들은 utils.js에 구현되어있음.  
- 모든 Styling은 styledComponent.js에 구현되어 있음.  
- 프로젝트에서 사용되는 image파일들은 images 폴더 안에 저장하는걸로 함(딱히 이유는 없어용).  

- **중요**   
  각 페이지마다 들어가야 하는 데이터들(ex. 공연일정 - 에스파, 에미넴)은 utils.js의  
  pushData를 이용하여 추가되는 구조, 모든 페이지에서 이러한 방식으로 데이터를 추가함. 그런데, 각각의  
  페이지에서 요구되는 컨텐츠 출력 포멧이 다르므로, 각각 페이지에 알맞는 element(=커스텀한 div)를 Elements.jsx에  
  정의해두었고, pushData는 이것을 파라미터로 받아 return해주는 역할을 함.  
  따라서, 각 페이지에 맞게 데이터 출력을 커스텀하고 싶으면 Elements.jsx에서 원하는 양식으로 바꿔주면 됨.  
  
## 해야할 것

- 전체적인 디자인  
- 축제 데이터 추가  
- 배포  
