import React from 'react';
import '../styles/components.css';

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>Обо мне</h2>
        <div className="about-card">
        <div className="content">
          <img src="https://somnolog-pulmonolog.ru/images/apnoeh-sna-mozhet-okazatsya-prichinoj.jpg" alt="Фото Ивана Прокрастинко" className="profile-img" />
          <div className="text">
            <p>Привет! Я профессиональный прокрастинатор с 10-летним стажем откладывания дел на потом.</p>
            <p>Специализируюсь на создании иллюзии занятости, придумывании оправданий и нахождении невероятно важных дел, которые нужно сделать прямо сейчас вместо работы.</p>
            <p>Мой девиз: "Зачем делать сегодня то, что можно отложить на завтра, послезавтра или вообще никогда?"</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;