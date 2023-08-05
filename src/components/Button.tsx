"use client";

const Button = () => {
  return (
    <button
      type="button"
      className="bg-purple-400"
      onClick={() => {
        console.log("IMA CHANGE IT");
      }}
    >
      hey
    </button>
  );
};
export default Button;
