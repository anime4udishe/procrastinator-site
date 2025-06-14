import React from 'react';
import '../styles/components.css';

function Navigation() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li><a href="#about">Обо мне</a></li>
          <li><a href="#skills">Навыки</a></li>
          <li><a href="#experience">Опыт</a></li>
          <li><a href="#education">Образование</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;