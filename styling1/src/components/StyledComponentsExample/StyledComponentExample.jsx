import React, {useState} from 'react'
import styled, {keyframes, ThemeProvider, createGlobalStyle} from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
  // const Title = styled.h1`
  //   font-size: 1.5em;
  //   text-align: center;
  //   color: palevioletred;
  // `;

  // // Create a Wrapper component that'll render a <section> tag with some styles
  // const Wrapper = styled.section`
  //   padding: 4em;
  //   background: papayawhip;
  // `;

  // const Button = styled.button`
  //   /* Adapt the colors based on primary prop */
  //   background: ${props => props.primary ? "palevioletred" : "white"};
  //   color: ${props => props.primary ? "white" : "palevioletred"};

  //   font-size: 1em;
  //   margin: 1em;
  //   padding: 0.25em 1em;
  //   border: 2px solid palevioletred;
  //   border-radius: 3px;
  // `;

  // // A new component based on Button, but with some override styles
  // // 위에 있던 Button component를 styled안에 넣어서 꾸미기 확장가능
  // const TomatoButton = styled(Button)`
  //   color: tomato;
  //   border-color: tomato;
  // `

  // const ReverseButton = props => <Button {...props} children={props.children.split('').reverse()}/>


const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  // &(Thing)에서 &(Thing)까지 다 적용
  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  // 바로 옆에있는것만 적용
  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`

const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.size || 'lem',
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size}
`

const PasswordInput = styled(Input).attrs({
  type: 'password'
})`
  border: 2px solid aqua;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem
`

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.borderColor};
`

const defaultTheme = {
  color: 'green',
  borderColor: 'green'
}

const redTheme = {
  color: 'red',
  borderColor: 'red'
}

const GlobalStyle = createGlobalStyle`
  button {
    background-color: pink;
  }
`

// npm install --save styled-components
export default function StyledComponentExample() {
  const [theme, setTheme] = useState(defaultTheme);

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <>
        <Rotate>&lt; a &gt;</Rotate>
        <div>
          {/* GlobalStlye에서 button태그를 설정해줬기 때문에 html안에 있는 button태그들 모두 적용시킴 */}
          <GlobalStyle/>
          <button onClick={()=>setTheme(redTheme)}>red</button>
          <button onClick={()=>setTheme(defaultTheme)}>green</button>
          {/* ThemeProvider의 역할은 자식 컴포넌트에게 컴포넌트를 모두 전달해줌 */}
          <ThemeProvider theme={theme}>
            {/* 버튼에 알아서 theme값이 들어감 */}
            <Button>Normal</Button>
            <Button>Themed</Button>
          </ThemeProvider>
        </div>
      </>
      <>
        <Input placeholder='A bigger text input' size='2em' />
        <br />
        <PasswordInput placeholder='A bigger password input' size='2em' />
      </>
      <>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>
      </>
      {/* <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
      <Button onClick={()=>alert('normal')}>Normal</Button>
      <Button onClick={()=>alert('primary')} primary>Primary</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <br/>
      <Button as='a' href='#'>
        Link with Tomato Button styles
      </Button>
      <TomatoButton as='a' href='#'>
        Link with Tomato Button styles
      </TomatoButton>
      <br/>
      {/* as를 사용해 다양하게 받을수 있음(확장된 태그) */}
      {/* <Button as={ReverseButton}>Custom Button with Normal Button styles</Button> */}
    </>
  )
};
