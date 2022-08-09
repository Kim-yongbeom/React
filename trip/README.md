![ezgif com-gif-maker](https://user-images.githubusercontent.com/89058117/183662823-11f81c53-ce7e-4419-95fc-4cfb54568b90.gif)



### 설치, 실행

- npm i @emotion/styled @emotion/react
- npm run start

### 사용한 기술과 선택한 이유

- typescript

```
정적 타입의 컴파일 언어로 코드 작성 단계에서 타입을 체크해
오류를 확인할 수 있고 미리 타입을 결정하기 때문에 실행 속도가
매우 빠르다는 장점이 있다.
```

- emotion

```
className이 자동으로 부여되기 때문에 스타일이 겹치지 않는다.
props, 조건 등에 따라 스타일을 지정할 수 있다.
styled component보다 파일 사이즈가 작다.
```

### 폴더 설명

- src/components/TripImg.tsx

```
트리플 이미지 컴포넌트
```

- src/components/ContentList

```
트리플 상세내용 컴포넌트
```

- src/components/AwardList

```
트리플의 수상내역 컴포넌트
```

- src/hooks

```
숫자 상승하는 애니메이션 커스텀 훅
```

- src/imgs

```
트리플의 이미지 폴더
```

- src/styles

```
반복되는 스타일을 저장한 폴더

animation.ts 파일은 애니메이션 설정
theme.ts 파일은 글꼴 색상 설정
```

- src/types

```
글꼴 색상을 위한 emotion의 theme 타입을 저장한 폴더
```

- index.tsx

```
index.tsx에 ThemeProvider theme={theme} 추가해 줘야 한다!!
```

### 숫자가 올라가는 애니메이션

```
숫자 상승 커스텀훅 참고
https://shylog.com/react-custom-hooks-scroll-animation-countup/

숫자 점점 느리게 상승 참고
https://gurtn.tistory.com/163
```
