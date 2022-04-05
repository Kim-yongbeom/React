## React의 장점
- Virtual DOM / JSX / Flux패턴 / Functional Programming

### DOM 과 Virtual DOM
- DOM은 HTML과 스크립팅 언어(Javascript)를 서로 이어주는 역할
- 웹브라우저 단에서 DOM 변화가 일어나면 웹브라우저가 CSS를 다시 연산하고 레이아웃을 구성 
- 페이지를 리렌더링이 일어 나는 이 과정에서 시간이 허비됨.
- 데이터가 업데이트 되면, 전체 UI를 Virtual DOM에 리렌더링함
- 이전 Virtual DOM에 있던 내용과 현재의 내용을 비교함 (가상 돔 끼리 비교)
- 바뀐 부분만 실제 DOM에 적용이 됨
- 컴포넌트가 업데이트 될때 , 레이아웃 계산이 한번만 이뤄짐

### Flux 패턴
- MVC(Model, View, Controller의 약자) 패턴의 복잡성을 해소하기 위해, Flux 패턴에서는 데이터가 한 방향으로만 흐름
