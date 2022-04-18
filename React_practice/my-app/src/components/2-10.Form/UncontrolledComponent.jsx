import React, {useRef} from 'react'

export default function UncontrolledComponent() {
  const fileInputRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${fileInputRef.current.files[0].name}`)
  }

  return (
    // uncontrolledComponent 는 value를 모른다
    // ref(레퍼런스)를 줌으로써 컴포넌트가 가진 값을 ref에 담는다
    <form onSubmit={handleSubmit}>
      <label>
        Upload file: 
        <input type="file" ref={fileInputRef} />
      </label>
      <br/>
      <button type="submit">Submit</button>
    </form>
  )
}
