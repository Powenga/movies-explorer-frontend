import "./AboutProject.css";

function AboutProject({ classes, children }) {
  return (
    <div className={`about-project ${classes ? classes : ""}`}>
      {children}
      <div className="about-project__content_wrap">
        <div className="about-project__content">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__content">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline">
        <p className="about-project__timeline-item about-project__timeline-item_type_back">
          1 неделя
        </p>
        <p className="about-project__timeline-item about-project__timeline-item_type_front">
          4 недели
        </p>
        <p className="about-project__timeline-item about-project__timeline-item_type_text">
          Back-end
        </p>
        <p className="about-project__timeline-item about-project__timeline-item_type_text">
          Front-end
        </p>
      </div>
    </div>
  );
}

export default AboutProject;
