import { FC } from 'react';
import { ILink } from '../../types';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './Social.module.css';

const b = block(styles);

enum SocialType {
  footer = 'footer',
  about = 'about',
}

interface Props {
  classes?: string;
  type?: SocialType;
  links: ILink[];
}

const Social: FC<Props> = ({
  classes = undefined,
  links,
  type = SocialType.about,
}) => {
  return (
    <div className={cn(b(), classes)}>
      <ul className={`social__list ${classes ? classes : ''}`}>
        {links.map((link, index) => (
          <li key={index} className={cn('item')}>
            <a
              className={cn(b('link'), 'transition')}
              href={link.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
