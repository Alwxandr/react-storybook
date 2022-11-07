import React, { useState } from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button2 = (props: ButtonProps) => {
  const [value, setValue] = useState('Строка')
  return <button>{value}</button>;
};

export default Button2;
