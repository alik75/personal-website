import React from "react";
import { useFormContext, FieldValues } from "react-hook-form";

interface Props{
    name?:string,
    type?:string,
    placeholder?:string,
    className?:string,
    wrapperClassName?:string,
    validatorRegex?:string,
    errorMsg?:string,
    required?:boolean,
    disabled?:boolean,
    rest?:object
}

const Input = ({
  name = "input",
  type = "text",
  placeholder = "Enter some text...",
  className = "",
  wrapperClassName = "",
  validatorRegex = "",
  errorMsg = "",
  required = false,
  disabled = false,
  ...rest
}:Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  return (
    <div className={"relative "+wrapperClassName}>
      <div
        className={`flex flex-row items-center h-11 w-full bg-gray-light bg-opacity-50 ${
          errors && errors[name] ? "border-b-2 border-red" : ""
        } rounded-full overflow-hidden ${className}`}
      >
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, {
            required: required ? "This field is required" : "",
          })}
          className={`md:py-2 py-4 px-6 md:text-base text-sm text-white bg-transparent placeholder:text-gray-light outline-none w-full`}
          disabled={disabled}
          autoComplete="off"
          {...rest}
        />
      </div>
      {errors && errors[name] && (
        <small className="absolute text-xs right-2 -bottom-5 text-red">
          {errors[name].message?.toString()}
        </small>
      )}
    </div>
  );
};

export default Input;
