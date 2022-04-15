# React

## React의 장점
- Virtual DOM / JSX / Flux패턴 / Functional Programming
- 바닐라 JS는 변경으로 인해 Element를 다시 그리지만 React는 변경된 부분만 다시 그림

## DOM
- DOM은 HTML과 스크립팅 언어(Javascript)를 서로 이어주는 역할
- 웹브라우저 단에서 DOM 변화가 일어나면 웹브라우저가 CSS를 다시 연산하고 레이아웃을 구성 
- 페이지를 리렌더링이 일어 나는 이 과정에서 시간이 허비됨.

## Virtual DOM
- 데이터가 업데이트 되면, 전체 UI를 Virtual DOM에 리렌더링함
- 이전 Virtual DOM에 있던 내용과 현재의 내용을 비교함 (가상 돔 끼리 비교)
- 바뀐 부분만 실제 DOM에 적용이 됨
- 컴포넌트가 업데이트 될때 , 레이아웃 계산이 한번만 이뤄짐

## JSX
- 문자도 HTML도 아닌 JavaScript의 확장 문법

## Babel
- 컴파일러: 언어 해석기, 특정 언어를 다른 프로그래밍 언어로 옮기는 프로그램

## Flux 패턴
- MVC(Model, View, Controller의 약자) 패턴의 복잡성을 해소하기 위해, Flux 패턴에서는 데이터가 한 방향으로만 흐름

## React 상태관리 라이브러리
- Redux, Mobx, Recoil
- Redux, Mobx, Recoil이 Flux 구조를 사용하고 있다
- MVC와 다르게 단방향으로 데이터가 흘러간다. 
- 데이터는 언제나 Dispatcher에서 Store로, Store에서 View로, 그리고 Action으로 다시 Dispatcher로 이런식으로 쭉 흐른다.

## Redux 특징
- 상태를 전역적으로 관리하기 때문에 어느 컴포넌트에 상태를 둬야할지 고민할 필요가 없다
- 데이터 흐름을 단방향(FLUX)으로 흐르게 한다
- 불변성 유지에 도움을 준다. 상태를 읽기전용으로 취급한다
- 러닝커브가 높은 편이다. 라이브러리가 많고 미들웨어도 필수적이다
- 코드량이 많아질 수 있다

## Mobx의 특징
- React에 종속적이지 않고 store에 제한이 없다
- observable을 기본적으로 사용하고 절대적으로 필요한 경우에만 state을 변경한다.
- JAVA Spring과 유사해서 서버 개발자들이 좋아한다. 객체지향적
- 캡슐화가 가능
- State의 불변성 유지를 위해 노력하지 않아도 된다.

 ## CDN (Content Delivery Network)
 - 웹에서 사용되는 다양한 컨텐츠(리소스)를 저장하여 제공하는 시스템

## useState
- 상태값을 관리해주는 훅
- setState의 첫번째 인자는 이전 값이다 (prev)

## useEffect
- 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과 Side Effect
- Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있음
- render가 끝난후 적용함

## useRef
- 컴포넌트 상태 안에서 라이프사이클과 독립적으로 사용하면서 리액트와 최적화된 저장공간 제공

## promise
- 자바스크립트 비동기 처리에 사용되는 

## fetch
- 자바스크립트를 사용하면 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 할 수 있다.
- promise를 기반으로 되어있기 때문에 상태에 따른 로직을 추가하고 처리하는데 최적화 되어있다.
