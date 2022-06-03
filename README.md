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

## useLayoutEffect
- useEffect와 유사 모든 DOM 변경 후 브라우저가 화면을 그리기 이전 시점에 동기적으로 수행됨

## useReducer
- useState 대체 state/reducer/action

## Memoization
- 기존에 수행한 연산의 결과값을 어딘가에 저장해두고 동일한 입력이 들어오면 재활용하는 프로그래밍 기법
- 중복 연산을 피할 수 있기 때문에 메모리를 조금 더 쓰더라도 애플리케이션의 성능 최적화 가능

## useMemo
- Memoization된 값을 반환함, dependency array가 변경될때만 다시 계산
- useMemo로 전달된 함수는 렌더링 중에 실행됨
- 통상적으로 렌더링 중에는 하지 않는 것을 useMemo내에서 하면 안됨 (ex) 사이드 이펙트는 useEffect에서만

## useCallback
- 특정한 함수를 Memoization 할 때 사용
- useMemo는 특정한 값을 Memoization 할 때 사용

## Context
- props drilling의 한계 해소
- Context를 사용하면 재사용하기 어려움
- createContext/ Provider/ Consumer
- useContext는 Consumer 

## promise
- 자바스크립트 비동기 처리에 사용되는 객체이다.

## fetch
- 자바스크립트를 사용하면 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 할 수 있다.
- promise를 기반으로 되어있기 때문에 상태에 따른 로직을 추가하고 처리하는데 최적화 되어있다.

## React time 라이브러리
- dayjs(가벼움)
- date-fns(함수형, tree-shaking)
- moment(안쓰는게 좋다)

## CSS의 문제점 (React를 쓰면서)
- Global Namespace: 글로벌 변수를 지양해야하는 JS와 대치
- Dependencies: css간의 의존 관리
- Dead Code Elimination: 안쓰는 css 인지 어려움
- Minification: 클래스 이름 최소화
- Sharing Constants: JS의 코드와 값을 공유하고 싶음
- Non-deterministic Resolution: css 파일 로드 타이밍 이슈
- Isolation: 격리

## 위 문제를 해결하기 위해 style 라이브러리 사용
- styled-component
- emotion(styled-component 사용가능)
- sass

## 상태관리 라이브러리
- Redux
```
- 상태를 전역적으로 관리하기 때문에 어느 컴포넌트에 상태를 둬야할지 고민할 필요 없음
- 데이터 흐름을 단방향으로 흐르게 한다
- flux 아키텍처를 따른다 (dispatch 관리를 위해 redux-thunk나 redux-saga와 같은 미들웨어 필수)
- 상태를 읽기 전용으로 취급한다
- 액션을 하나 추가하는데, 작성 필요한 부분이 많고, 컴포넌트와 스토어를 연결하는 필수적인 부분들이 있어 코드량이 많아질 수 있다
```
- MobX
```
- React에 종속적인 라이브러리가 아니고, Redux와 다르게 store에 제한이 없다
- observable을 기본적으로 사용하고, 절대적으로 필요한 경우에만 state를 변경한다
- 객체 지향적이다. 캡슐화가 가능하다
- state의 불변성 유지를 위해 노력하지 않아도 된다. Redux에서는 state의 불변성 유지를 위해 여러 라이브러리를 사용한다
```
- Recoil
```
- 비동기 처리를 기반으로 작성되어 동시성 모드를 제공하기 때문에, Redux와 같이 다른 비동기 처리 라이브러리에 의존할 필요가 없다
- atom -> selector를 거쳐 컴포넌트로 전달되는 하나의 data-flow를 가지고 있어 복잡하지 않은 상태 구조를 가지고 있다
- atom과 selector만 알고도 어느정도 구현이 가능하기 때문에 러닝커브가 비교적 낮다고 할 수 있다
- store와 같은 외부 요인이 아닌 React 내부의 상태를 활용하고 context API를 통해 구현되어 있기 때문에 더 리액트에 가까운 라이브러리라고 할 수 있다
```

## GraphQL
- 오버배치, 언더패치의 단점들을 해결
```
Over-fetching : 내가 요청한 영역의 정보보다 더 많은 정보를 서버에서 받는다. 
즉, 쓸모없는 정보들도 받게된다. 이는 비효율적이고 개발자들이 뭘 받았는지 모르게 된다.

Under-fetching : 어떤 하나를 완성하기위해 다른 요청들을 해야할 때 발생한다. 
예를들어 인스타를 만들면 페이지의 피드를 받고 알림도 받고 사용자 프로필도 받게된다. 
앱을 처음 시작하려면 이 세가지 요청을 해야 함 ! 즉 3가지 요청이 3번 오고가야 앱이 시작된다는 것이다. 
이처럼 REST에서 하나를 완성하려고 많은 소스를 요청하는 것이 Under-fetching이다.
```

## Next.js
- npx create-next-app 
- 서버 사이드 렌더링 (SSR)
- TypeScript 내장
- 설정
```
Next는 기본적으로 웹팩과 바벨을 사용하고 있습니다. 
웹팩과 바벨을 사용하여 서버 사이드 렌더링 및 개발에 필요한 설정이 이미 되어 있어 빠르게 개발을 시작할 수 있습니다. 
사용하고싶은 플러그인 또한 손쉽게 추가하여 사용할 수 있도록 지원하고 있습니다.
```
