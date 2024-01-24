import { Input } from "../input";

export const EmailInput = () => {
  return (
    <Input
      label="Email"
      name="email"
      placeholder="mail@nomade.dev"
      required
      validate={(v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "Inserisci un indirizzo email valido."
      }
    />
  );
};

export const PasswordInput = ({
  label = "Password",
  name = "password",
}: {
  label?: string;
  name?: string;
}) => {
  return (
    <Input
      label={label}
      name={name}
      placeholder="********"
      type="password"
      required
      minLength={8}
    />
  );
};

export const FormMessage = ({
  error,
  success,
}: {
  error?: string;
  success?: string;
}) => {
  if (error) {
    return (
      <p className="bg-red-600 font-semibold rounded-full shadow-[5px_5px_0px_0px_#000] border-4 border-gray-900 px-3 py-1 text-white">
        {error}
      </p>
    );
  }
  if (success) {
    return (
      <p className="bg-green-300 font-semibold rounded-full shadow-[5px_5px_0px_0px_#000] border-4 border-gray-900 px-3 py-1 text-gray-900">
        {success}
      </p>
    );
  }
  return <></>;
};

interface AuthLinkProps {
  passwordLink?: boolean;
  signupLink?: boolean;
  loginLink?: boolean;
}
export const AuthLink = ({
  passwordLink,
  signupLink,
  loginLink,
}: AuthLinkProps) => {
  return (
    <div>
      {passwordLink && (
        <p className="text-base text-gray-900 ">
          <a
            href="/auth/forgotten-password"
            className="font-medium text-primary-600 hover:underline "
          >
            Password dimenticata?
          </a>
        </p>
      )}
      {loginLink && (
        <p className="text-base text-gray-900 ">
          <a
            href="/auth/sign-in"
            className="font-medium text-primary-600 hover:underline "
          >
            Vai al login
          </a>
        </p>
      )}
      {signupLink && (
        <p className="text-base text-gray-900 ">
          Sei nuovo?{" "}
          <a
            href="/#subscription"
            className="font-medium text-primary-600 hover:underline "
          >
            Abbonati!
          </a>
        </p>
      )}
    </div>
  );
};
