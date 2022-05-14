import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import "./input-field.scss";

function InputField({
  labelName,
  type,
  value,
  name,
  placeholder,
  errorMessage,
  ...other
}) {
  const [showPass, setShowPass] = useState(false);

  let content = null;

  if (type === "textarea") {
    content = (
      <textarea
        {...other}
        placeholder={labelName}
        className="input-group-new__input w-full p-4"
        name={name}
        value={value}
      />
    );
  } else {
    content = (
      <input
        {...other}
        type={type === "password" ? (showPass ? "text" : "password") : type}
        className="input-group-new__input text-black p-4 w-full text-justify"
        placeholder={placeholder ? placeholder : labelName}
        value={value}
        name={name}
      />
    );
  }

  return (
    <div className="input-group-new w-full mt-4 mx-auto mb-8 block relative capitalize">
      <label
        className="input-group-new__label text-gray-600 m-4 text-left block"
        htmlFor={name}
      >
        {labelName}
      </label>
      {content}

      <span className="input-group-new__focus-border absolute bg-blue-300"></span>

      {type === "password" ? (
        <span
          onClick={() => setShowPass((val) => !val)}
          className="input-group-new__show-pass absolute"
        >
          {showPass ? (
            <AiFillEye />
          ) : (
            <AiFillEyeInvisible className="text-blue-300" />
          )}
        </span>
      ) : null}
    </div>
  );
}

export default InputField;
