import React from 'react'

export default function List() {
  // const numbers = [1,2,3,4,5]
  // return (
  //   <div>
  //     {numbers.map((item)=><li key={item.toString()}>{item}</li>)}
  //   </div>
  // )
  const todos = [
    {id: 1, text: 'drink Water'},
    {id: 2, text: 'wash'},
    {id: 3, text: 'zzz'},
    {id: 4, text: 'aaa'},
  ]

  const Item = (props) => {
    return <li>{props.text}{props.id}</li>
  }

  // key를 설정해주지 않으면 워닝뜸(안주면 index를 사용함)
  // key는 프룹스로 넘어가지 않는다 그래서 id로 넘겨줌
  const TodoList = todos.map((todo) => 
    <Item key={todo.id} id={todo.id} text={todo.text} />
  )

  return (
    <>
      {TodoList}
    </>
  )
}
