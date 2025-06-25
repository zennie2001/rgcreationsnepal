import React from "react";

const TextInput = React.forwardRef(
  (
    {
      type,
      placeholder,
      styles,
      label,
      labelStyles,
      // register,
      name,
      error,
    }: any,
    ref
  ) => {
    return (
      <div className="w-full flex flex-col mt-2">
        {label && (
          <p className={`text-ascent-2 text-base mb-2 ${labelStyles}`}>
            {label}
          </p>
        )}

        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`bg-gray-200 rounded border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-3 mb-4 placeholder:text-[#666] ${styles}`}
            // {...register}
            aria-invalid={error ? "true" : "false"}
          />
        </div>
        {error && (
          <span className="text-xs text-[#f64949fe] mt-[-10px]">{error}</span>
        )}
      </div>
    );
  }
);

export default TextInput;
