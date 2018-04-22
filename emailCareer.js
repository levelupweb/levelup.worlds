const emailjs = require('emailjs');
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const config = require('./config').server;

const emailBody = data => `
  <html><body> 
    <h1>Новый отклик на вакансию Levelupworlds.com</h1>
    <p>С сайта Levelupworlds.com пришел новый отлкик на вакансию</p>
    <ul>
      <li>Вакансия: ${data.title || 'Не указано'}</li>
      <li>Имя клиента: ${data.name || 'Не указано'}</li>
      <li>E-mail: ${data.email || 'Не указано'}</li>
      <li>Номер телефона: ${data.phone || 'Не указано'}</li>
      <li>Ссылка на портфолио: ${data.portfolio || 'Не указано'}</li>
      <li>Ссылка на резюме: ${data.resume || 'Не указано'}</li>
      <li>Сообщение: ${data.message || 'Не указано'}</li>
    </ul>
  </body></html>
`;

const emailserver = emailjs.server.connect({
  user:	config.smtpuser,
  password: config.smtppassword,
  host:	config.smtphost,
  ssl: true,
});

module.exports.checkCareerData = [
  check('title')
    .exists()
    .withMessage("Не заполнено поле 'Название вакансии'"),
  check('name')
    .exists()
    .withMessage("Не заполнено поле 'Имя'"),
  check('portfolio')
    .optional()
    .isURL()
    .withMessage("Не верная ссылка в поле 'Портфолио'"),
  check('resume')
    .optional()
    .isURL()
    .withMessage("Не верная ссылка в поле 'Резюме'"),
  check('email')
    .exists()
    .withMessage("Не заполнено поле 'Email"),
  check('email')
    .isEmail()
    .trim()
    .normalizeEmail()
    .withMessage('Неверный формат Email адреса'),
  check('phone')
    .exists()
    .withMessage('Не заполнено поле "Контактный телефон"'),
  check('message')
    .optional()
    .isLength({
      min: 1,
      max: 1000,
    })
    .withMessage('Сообщение не может быть больше 1000 символов'),
];

module.exports.emailCareerHandler = (req, res) => {
  const data = matchedData(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.mapped(),
    });
  }

  const message	= {
    text: 'Новое сообщение с сайта Levelupworlds.com',
    from: config.mail.sender,
    to: `<${config.mail.receiever}>`,
    subject: 'Новое сообщение с сайта Levelupworlds.com',
    attachment: [{
      data: emailBody(req.body),
      alternative: true,
    }],
  };

  return emailserver.send(message, (err, message) => {
    if (err) {
      console.log('Send Error: ', err);
      return res.status(500).send(err);
    }
    return res.status(200).json({ isSended: true });
  });
};
