import './Promo.css';
import { FC } from 'react';
import Button, { ButtonType } from '../Button/Button';

interface Props {
  onLearnMoreClick: () => void;
  classes?: string;
}

const Promo: FC<Props> = ({ onLearnMoreClick, classes }) => {
  return (
    <div className={`promo ${classes ? classes : ''}`}>
      <div className="promo__grid">
        <div className="promo__content">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <div className="promo__pic-container">
          <div className="promo__pic"></div>
        </div>
      </div>
      <Button
        classes="btn_type_promo promo__learn-more"
        type={ButtonType.button}
        onClick={onLearnMoreClick}
      >
        Узнать больше
      </Button>
    </div>
  );
};

export default Promo;
