import { FC, PropsWithChildren } from 'react';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './Button.module.css';

const b = block(styles);

export enum ButtonType {
  button = 'button',
  submit = 'submit',
}

interface Props {
  classes?: string;
  type?: ButtonType;
  areaLabel?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({
  classes = undefined,
  type = ButtonType.button,
  areaLabel,
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={cn(b(), 'transition', 'transiton_type_button', classes)}
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={areaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
