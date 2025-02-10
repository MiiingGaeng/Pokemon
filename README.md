# Pokemon 😼

Vite + React를 사용한 프로젝트로, 포켓몬의 정보를 확인하고 관심 포켓몬을 저장/삭제할 수 있는 dex 웹페이지 입니다.
<br><br>

## 프로젝트 미리보기🏅

- Home

- Dex

- Detail

- Card

- Toast

  <br><br>

## 프로젝트 소개📄

**📆 프로젝트 기간 : 2025.02.03 ~ 2025.02.10**

포켓몬 id, 속성, 소개가 포함된 포켓몬 dex 페이지입니다. 로컬스토리지를 활용하여 포켓몬 리스트를 저장하고, `ADD 버튼`과 `DELETE 버튼`으로 추가/삭제가 가능합니다. 카드를 클릭하면 해당 포켓몬의 디테일이 포함된 Detail 페이지로 이동되며, `RETURN TO DEX 버튼`으로 다시 Dex 페이지로 돌아올 수 있습니다.

반응형 디자인이 적용되지 않아, PC 환경에 최적화되어 있으며 모바일 환경은 지원하지 않습니다.
<br><br>

## 프로젝트 사용 기술💻

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<br><br>

## 프로젝트 기능⚙️

- React로 구성되었습니다.
- 한국어를 제공합니다.
- 로컬 스토리지를 사용하여 새로고침해도 입력한 정보가 사라지지 않습니다.
- 포켓몬 중복 추가, 6마리 이상 추가 방지에 대한 예외처리가 가능합니다.
- react-toastify 라이브러리를 사용한 알람창으로 UX를 개선하였습니다.
  <br><br>

## 트러블 슈팅🧑‍💻

[TroubleShooting 1 : Detail 페이지와 이벤트 버블링](https://velog.io/@miiing_gaeng/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90-%EC%82%AC%EC%9D%B4%ED%8A%B8-TroubleShooting-1-Detail-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%99%80-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81)

[요약]<br>
문제 ▶️ Query params에 대한 개념 부족, 이벤트 버블링 발생
<br>해결 ▶️ Query params 개념 정리, `event.stopPropagation`으로 이벤트 버블링 해결
<br>교훈 ▶️ Query params에 대한 개념 복습 필요

[TroubleShooting 2 : Detail 페이지와 이벤트 버블링](https://velog.io/@miiing_gaeng/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90-%EC%82%AC%EC%9D%B4%ED%8A%B8-TroubleShooting-2-prefix%EC%99%80-Context-API)

[요약]<br>
문제 ▶️ 사용자 정의 prop (HTML 속성이 아닌 prop)이 DOM 요소로 전달되었다는 경고, `Button`이 렌더링 되는 곳에 따라 동적으로 작동되어야함
<br>해결 ▶️ styled-components 속성에 `$ prefix` 추가, `isInList` 속성 추가
<br>교훈 ▶️ styled-components에 대한 연습 필요

## 프로젝트 후기✍️

이번 프로젝트의 큰 목표는 prop-drilling에서 Context API와 Redux(RTK)로 리팩토링하는 방법을 연습하는 것이다. 처음 써보는 문법이라 어색하고 두려웠지만, 여러번 코드를 작성하다보니 익숙해질 수 있었다. 뭐든 처음이 가장 어렵고, 연습을 꾸준히 반복하다보면 금방 내 것이 된다. 앞으로 많은 문법들을 배우면서 이 점을 잊지말자!<br>
또한, Vercel로 배포하면서 발생되는 오류들을 찾아보고 학습할 수 있었다. 프로젝트 마지막 배포까지 계속 오류가 있을 수 있다는 점을 상기하면서, 오류를 찾으면 바로 해결하도록 하자.
