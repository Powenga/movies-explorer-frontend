import { FC, PropsWithChildren } from 'react';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './AboutProject.module.css';

const b = block(styles);

interface Props {
  classes?: string;
}

const AboutProject: FC<PropsWithChildren<Props>> = ({
  classes = undefined,
  children,
}) => {
  return (
    <div className={cn(b(), classes)}>
      {children}
      <div className={b('content_wrap')}>
        <div className={b('content')}>
          <h3 className={b('subtitle')}>Дипломный проект включал 5 этапов</h3>
          <p className={b('text')}>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className={b('content')}>
          <h3 className={b('subtitle')}>На выполнение диплома ушло 5 недель</h3>
          <p className={b('text')}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className={b('timeline')}>
        <p className={b('timeline-item', { type: 'back' })}>1 неделя</p>
        <p className={b('timeline-item', { type: 'front' })}>4 недели</p>
        <p className={b('timeline-item', { type: 'text' })}>Back-end</p>
        <p className={b('timeline-item', { type: 'text' })}>Front-end</p>
      </div>
    </div>
  );
};

export default AboutProject;
