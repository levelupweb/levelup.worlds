import config from '../../utils/config';

export default [
  {
    title: 'Front-end разработчик',
    level: 'Junior/Middle',
    description: 'В команду требуется Front-end разработчик с хорошим знанием основ веб-разработки и минимального стека для современного workflow.',
    needs: ['ES6', 'React', 'Redux', 'Git flow', 'REST API', 'CSS (Процессоры)', 'Semantic HTML'],
    image: `${config.static}/img/space-ship.png`,
    date: new Date(2017, 8, 1),
  },
  {
    title: 'Менеджер по продажам',
    level: 'Middle',
    description: 'В команду разыскивается опытный продажник, способный продавать наши уникальные предложения малому, среднему и большому бизнесу',
    needs: ['Опыт более 1 года', 'Работа с лидами', 'Работа со скриптами'],
    image: `${config.static}/img/presentation.png`,
    date: new Date(2017, 8, 2),
  },
];
