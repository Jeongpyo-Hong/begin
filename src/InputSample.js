import React, { useState, useRef } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    title: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { title, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { name, value } = e.target; // e.target에서 input 태그의 name과 value를 추출
    setInputs({
      ...inputs, // 기존의 inputs를 복사
      [name]: value, // input 태그의 name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      title: "",
      nickname: ""
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="title"
        placeholder="이름"
        onChange={onChange}
        value={title}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {title} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
