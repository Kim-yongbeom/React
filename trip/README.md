### 설치, 실행

- npm i @emotion/styled @emotion/react
- npm run start

### 사용한 기술과 선택한 이유

- typescript:
- emotion:

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
