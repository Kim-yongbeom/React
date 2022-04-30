// react 17버전 이상부터는 생략가능
// import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// styled-component 처럼 사용가능
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const color = "white";

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: "underline",
});

const AnotherComponet = () => (
  <div css={[anotherStyle, style]}>Some text with an underline.</div>
);

const P = (props) => (
  <p
    // 객체 형태(return 부분에 스트링 형태로 작성한 코드 있음)
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "sans-serif",
      color: "black",
    }}
    {...props}
  />
);

// P 컴포넌트를 확장할 수 있다.
const ArticleText = (props) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: "Georgia, serif",
      color: "darkgray",
    }}
    {...props}
  />
);

const danger = css`
  color: red;
`;

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;

export default function EmotionExample() {
  return (
    <>
      <div
        // 스트링 형태
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color
      </div>
      <Button>Hello</Button>
      <SomeComponent />
      <AnotherComponet />
      <P>pppp</P>
      <ArticleText>AAAAA</ArticleText>
      <div>
        <div css={base}>This</div>
        <div css={[danger, base]}>Will</div>
        {/* BASE의 backgroun-color는 오버라이드 되지 않음 */}
        <div css={[base, danger]}>Be</div>
      </div>
    </>
  );
}
