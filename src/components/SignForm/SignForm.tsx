import './SignForm.css';
import Logo from '../Logo/Logo';
import { forwardRef, PropsWithChildren, SyntheticEvent } from 'react';

interface Props {
  classes?: string;
  formTitle: string;
  formName: string;
  onSubmit: (evt: SyntheticEvent) => void;
}

const SignForm = forwardRef<HTMLFormElement, PropsWithChildren<Props>>(
  (
    { classes = undefined, formTitle, formName, onSubmit, children },
    formRef
  ) => {
    return (
      <div className={`sign-form ${classes ? classes : ''}`}>
        <Logo classes="sign-form__logo" />
        <h1 className="sign-form__title">{formTitle}</h1>
        <form
          ref={formRef}
          className="sign-form__form"
          name={formName}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
        </form>
      </div>
    );
  }
);

export default SignForm;
