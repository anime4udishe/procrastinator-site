import React from 'react';
import '../styles/components.css';

function Skills() {
  const skills = [
    { name: 'Откладывание дел', level: 95 },
    { name: 'Придумывание оправданий', level: 90 },
    { name: 'Прокрутка ленты', level: 98 },
    { name: 'Сон на работе', level: 85 },
    { name: 'Имитация бурной деятельности', level: 88 },
    { name: 'Поиск котиков в интернете', level: 99 }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Мои навыки</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;