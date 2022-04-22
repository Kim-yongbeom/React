import React, { useCallback } from 'react'
import CommentItem from './CommentItem'

export default function Comments({commentList}) {
  // Comments 자체가 리랜더링 되기때문에 막아주기 위해 useCallback사용

  const handleClick = useCallback(() => {
    console.log('눌림')
  },[])
  return (
    <div>
      {commentList.map(comment => <CommentItem
        key = {comment.title}
        title= {comment.title}
        content={comment.content}
        likes={comment.likes}
        onClick={handleClick}
      />)}
    </div>
  )
}
