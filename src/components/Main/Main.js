import "./Main.css";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs.js";

function Main() {
  return (
    <main className="main">
      <section className="main__section main__section_type_promo">
        <Promo classes="main__section-inner" />
      </section>
      <section className="main__section">
        <AboutProject classes="main__section-inner">
          <h2 className="main__section-title main__section-title_type_about-project">
            О проекте
          </h2>
        </AboutProject>
      </section>
      <section className="main__section main__section_type_techs">
        <Techs classes="main__section-inner">
          <h2 className="main__section-title main__section-title_type_techs">
            Технологии
          </h2>
        </Techs>
      </section>
    </main>
  );
}

export default Main;
