import { useState } from 'react';

export function useValidation() {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleValidation = (evt, form) => {
    setErrors({...errors,  [evt.target.name]: evt.target.validationMessage });
    setIsValid(form.checkValidity())
  };
  return { errors, isValid, handleValidation };
}
