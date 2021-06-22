import "./Main.css";
import Promo from "../Promo/Promo.js";

function Main() {
  return (
    <main className="main">
      <section className="main__section main__section_type_promo">
        <Promo classes="main__section-inner"/>
      </section>
      <section className="main__section">
        <Promo classes="main__section-inner"/>
      </section>
    </main>
  );
}

export default Main;
