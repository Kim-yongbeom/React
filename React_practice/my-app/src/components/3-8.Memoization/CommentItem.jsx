import React, { Profiler, memo, useState, useMemo } from 'react'
import "./CommentItem.css"

function CommentItem({title, content, likes, onClick}) {
  const [clickCount, setClickCount] = useState(0)
  function onRenderCallback(
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" 트리가 방금 마운트된 경우
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋햇는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ){
    // 렌더링 타이밍을 집합하거나 로그
    console.log(`actualDuration(${title}: ${actualDuration})`)
  }

  const handleClick= () => {
    onClick()
    setClickCount(prev => prev + 1)
    alert(`${title}를 ${clickCount+1}만큼 누름`)
  }

  // useMemo는 리턴한 값을 넣어줌(rate에 넣음)
  const rate = useMemo(() => {
    console.log("rate check")
    return likes > 10 ? 'Good' : 'Bad';
  },[likes])

  return (
    // Profiler는 React 애플리케이션이 렌더링하는 빈도와 렌더링 “비용”을 측정합니다. 
    // Profiler의 목적은 메모이제이션 같은 
    // 성능 최적화 방법을 활용할 수 있는 애플리케이션의 느린 부분들을 식별해내는 것입니다.
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <div className="CommentItem" onClick={handleClick}>
        <span>{title}</span>
        <br/>
        <span>{content}</span>
        <br/>
        <span>{likes}</span>
        <br/>
        <span>{rate}</span>
        <br/>
        <span>{clickCount}</span>
      </div>
    </Profiler>
  )
}

export default memo(CommentItem)