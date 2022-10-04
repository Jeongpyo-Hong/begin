import React from 'react';

const Hello = ({name, color, isSpecial}) => {
  return (
    <div style = {{color}}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  )
}

// 컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶을 때 사용
Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;