import { UseFormReturn, FieldValues, useFormContext } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: "password" | "text";
  required?: boolean;
  placeholder: string;
  validate?: (value: string) => boolean | string;
}

export const Input = ({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  validate = () => true,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

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
        placeholder={placeholder}
        className="bg-gray-50 placeholder:text-gray-400 border-2 border-gray-900 text-gray-900 sm:text-sm  focus:shadow-lg focus:ring-myYellow focus:border-gray-900 block w-full p-2.5 "
        {...register(name, {
          required: required ? `Campo obbligatorio.` : false,
          validate: {
            matchPattern: validate,
          },
        })}
      />
      <p className="h-3 pb-5 text-red-700">
        {errors[name] ? (errors[name]?.message as string) : ""}
      </p>
    </div>
  );
};
