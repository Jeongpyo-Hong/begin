import React from 'react'

// Wrapper 안에 Hello내용이 보이게 하려면 props.children을 렌더링 해주어야 함
const Warpper = ({children}) => {
  const style = {
    border: '2px solid black',
    padding: '16px',
  }

  return (
    <div style = {style}>
      {children}
    </div>
  )
}

export default Warpper
