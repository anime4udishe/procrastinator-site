import React from 'react';
import '../styles/components.css';

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Образование</h2>
        <div className="education-item">
          <h3>Университет Прокрастинации</h3>
          <p>Магистр искусств откладывания (2015)</p>
          <p>Тема диссертации: "Влияние YouTube-роликов на эффективность прокрастинации в офисных условиях"</p>
        </div>
        <div className="education-item">
          <h3>Курсы повышения квалификации</h3>
          <ul>
            <li>"Как смотреть сериалы и делать вид, что работаешь" (2018)</li>
            <li>"Искусство спать с открытыми глазами" (2017)</li>
            <li>"Форумы и соцсети: продвинутые техники прокрастинации" (2016)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;