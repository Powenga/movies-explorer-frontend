import { FC } from 'react';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './ErrorMessage.module.css';

const b = block(styles);

interface Props {
  classes?: string;
  text: string;
}

const ErrorMessage: FC<Props> = ({ classes, text }) => {
  return <p className={cn(b(), classes)}>{text}</p>;
};

export default ErrorMessage;
