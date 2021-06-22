import "./Promo.css";
import Button from "../Button/Button";

function Promo({ classes }) {
  return (
    <div className={`promo ${classes ? classes : ""}`}>
      <div className="promo__grid">
        <div className="promo__content">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <div className="promo__pic-container">
          <div className="promo__pic"></div>
        </div>
      </div>
      <Button classes="btn_type_promo promo__learn-more">
        Узнать больше
      </Button>
    </div>
  );
}

export default Promo;
