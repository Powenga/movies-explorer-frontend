import "./Main.css";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe";
import { useRef } from "react";

function Main({ classes }) {
  const aboutProjectRef = useRef(null);

  function learnMoreHandler(){
    aboutProjectRef.current.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section main__section_type_promo">
        <Promo onLearnMoreClick={learnMoreHandler} classes="main__section-inner" />
      </section>
      <section ref={aboutProjectRef} className="main__section">
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
      <section className="main__section main__section_type_about-me">
        <AboutMe classes="main__section-inner">
          <h2 className="main__section-title main__section-title_type_about-me">
            Cтудент
          </h2>
        </AboutMe>
      </section>
    </main>
  );
}

export default Main;
