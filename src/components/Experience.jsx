import React from 'react';
import '../styles/components.css';

function Experience() {
  const jobs = [
    {
      period: '2020 - настоящее время',
      title: 'Старший прокрастинатор в "ООО Отложим и Ко"',
      tasks: [
        'Разработал систему откладывания дел на 3 уровня вложенности',
        'Установил рекорд компании - 47 дней на выполнение 15-минутной задачи',
        'Провел мастер-класс "101 причина, почему я еще не сделал"'
      ]
    },
    {
      period: '2015 - 2020',
      title: 'Прокрастинатор в "ИП Завтра сделаю"',
      tasks: [
        'Оптимизировал процесс прокрастинации, сократив время на принятие решения об откладывании с 5 минут до 10 секунд',
        'Создал базу данных "Лучшие сериалы для просмотра в рабочее время"'
      ]
    },
    {
      period: '2010 - 2015',
      title: 'Младший прокрастинатор в "ТОО Может быть"',
      tasks: [
        'Освоил базовые навыки прокрастинации',
        'Научился искусственно создавать авралы для оправдания задержек'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Опыт работы</h2>
        <div className="timeline">
          {jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <h3>{job.period}</h3>
              <h4>{job.title}</h4>
              <ul>
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;