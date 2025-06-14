import React from 'react';
import '../styles/components.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Свяжитесь со мной</h2>
        <p>Но только не сейчас, я очень занят (на самом деле нет).</p>
        
        <div className="contact-card">
          <div className="contact-info">
            <p>
              <span>📧</span>
              Email: <a href="mailto:gvozdevsky.alexandr@yandex.ru">otlozhim@zavtra.com</a> 
              <span className="contact-note">(отвечаю в течение 2-3 недель)</span>
            </p>
            
            <p>
              <span>📱</span>
              Телефон: +7 (XXX) XXX-XX-XX 
              <span className="contact-note">(лучше напишите, я все равно не возьму трубку)</span>
            </p>
            
            <p>
              <span>🌐</span>
              Соцсети: {' '}
              <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D1%8C">Facebook</a> | 
              <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D1%8C">Instagram</a> | 
              <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D1%8C">ВКонтакте</a>
              <span className="contact-note">(активно обновляю вместо работы)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;