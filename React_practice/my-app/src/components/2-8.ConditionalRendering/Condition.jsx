import React from 'react'

function UserGreeting(props) {
  // props에 name이 있다면 props.name + ',' 보여줌
  // 없다면 아예 보이질 않음
  return <h1>{props.name && `${props.name},`} Welcome {props.count ? `It is ${props.count} times` : null}</h1>
}

function GuestGreeting(props){
  return <h1>Please sign up</h1>
}

function Greeting(props) {
  // if(props.isLoggedIn) {
  //   return <UserGreeting name="kim" count={0}/>
  // }
  // return <GuestGreeting/>
  // 같은 코드
  return props.isLoggedIn ? <UserGreeting name="kim" count={1}/> : <GuestGreeting/>
}

export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
    </div>
  )
}
