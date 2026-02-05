import { isEmail } from "./utils";

 export type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const useFormValidation = (
  refs: Record<keyof FormValues, React.RefObject<HTMLInputElement |  HTMLTextAreaElement | null>>
) => {
  const validate = (form: FormValues) => {
    if (!form.name.trim()) {
      refs.name.current?.focus();
      return false;
    }

    if (!form.email.trim()) {
      refs.email.current?.focus();
      return false;
    }

    if (!isEmail(form.email)) {
      refs.email.current?.focus();
      return false;
    }

    if (!form.message.trim()) {
      refs.message.current?.focus();
      return false;
    }

    return true;
  };

  return { validate };
};
