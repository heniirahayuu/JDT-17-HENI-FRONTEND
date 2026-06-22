import React from "react";

interface IButtonComponent {
  content: string;
  desc?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: IButtonComponent) => {
  return (
    <button
      className="rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_12px_40px_-18px_rgba(255,20,147,0.95)] transition duration-200 hover:bg-pink-400 disabled:cursor-not-allowed disabled:opacity-60"
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
};

export default Button;