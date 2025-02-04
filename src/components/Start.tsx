"use client";

import React from "react";

type StartProps = {
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Start = ({ setUserName }: StartProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleClick = () => {
    setError(null);
    if (inputRef.current?.value) {
      setUserName(inputRef.current.value);
    } else {
      setError("O nome é obrigatório");
    }
  };

  return (
    <div className="start">
      {error && <p className="errorMessage">{error}</p>}
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
