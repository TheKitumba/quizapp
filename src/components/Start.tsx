"use client";

import React from "react";

type StartProps = {
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Start = ({ setUserName }: StartProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current?.value) {
      setUserName(inputRef.current.value);
    }
  };

  return (
    <div className="start">
      <input
        type="text"
        placeholder="Digita o seu nome"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        <div>Start</div>
      </button>
    </div>
  );
};
