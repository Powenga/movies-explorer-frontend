import { ChangeEvent, useState } from 'react';

export function useValidation() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);

  const handleValidation = (
    evt: ChangeEvent<HTMLInputElement>,
    form: HTMLFormElement | null
  ) => {
    setErrors({ ...errors, [evt.target.name]: evt.target.validationMessage });
    if (form) {
      setIsValid(form.checkValidity());
    }
  };
  return { errors, isValid, handleValidation };
}
