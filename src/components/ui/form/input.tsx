import { twMerge } from "tailwind-merge";

import { replaceWith } from "@/utilities/common";
import { InputProps } from "./form.interface";

function Input(props: InputProps) {
  return (
    <div className={twMerge("relative z-0", props.container)}>
      <label
        className="block mb-2 text-sm font-medium"
        htmlFor={replaceWith(props.label)}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name ? props.name : replaceWith(props.label)}
        id={replaceWith(props.label)}
        className={twMerge(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-[#afafaf] focus:border-[#afafaf] block w-full p-2.5",
          props.className,
          props.validationError && "border-red-500"
        )}
        placeholder={props.placeholder ?? `Enter your ${props.label}`}
        value={props.value}
        onChange={props.onChange}
      />
      {props.validationError && (
        <p className="text-red-500 text-sm">{props.validationError}</p>
      )}
    </div>
  );
}

export default Input;
