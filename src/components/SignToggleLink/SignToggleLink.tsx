import './SignToggleLink';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface Props {
  text: string;
  linkText: string;
  link: string;
}

const SignToggleLink: FC<Props> = ({ text, linkText, link }) => {
  return (
    <div className="sign-toggle-link">
      <p className="sign-toggle-link__inner">
        {text}&nbsp;
        <Link to={link} className="sign-toggle-link__link transition">
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default SignToggleLink;
