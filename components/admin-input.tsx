import { useFormContext } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: "password" | "text";

  placeholder: string;
}

export const Input = ({
  label,
  name,
  type = "text",

  placeholder,
}: InputProps) => {
  // retrieve all hook methods

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="bg-gray-50 placeholder:text-gray-400 border-2 border-gray-900 text-gray-900 sm:text-sm  focus:shadow-lg focus:ring-myYellow focus:border-gray-900 block w-full p-2.5 "
      />
    </div>
  );
};

interface TextAreaProps {
  label: string;
  name: string;

  placeholder: string;
  rows?: number;
}
export const TextArea = ({
  label,
  name,

  placeholder,
  rows = 2,
}: TextAreaProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="bg-gray-50 placeholder:text-gray-400 border-2 border-gray-900 text-gray-900 sm:text-sm  focus:shadow-lg focus:ring-myYellow focus:border-gray-900 block w-full p-2.5 "
      />
    </div>
  );
};
