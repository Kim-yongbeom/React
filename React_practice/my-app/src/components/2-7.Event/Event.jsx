import React from 'react'

export default function Event() {
  const handleButtonClick = (e) => {
    console.dir(e)
    console.log('111')
  }

  const handleMouseLeave = (e) => {
    console.dir(e);
  }

  const handleClickCapture = () => {
    console.log('caputre1')
  }
  const handleClickCapture2 = () => {
    console.log('caputre2')
  }
  const handleClickBubble = () => {
    console.log('bubble')
  }
  return (
    // onClickCapture는 자식보다 부모가 먼저 클릭을 인지하게 만들때 사용
    // Bubble/Capture 순서
    // Capture > target > Bubble
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
      </div>
    </div>
  )
}
