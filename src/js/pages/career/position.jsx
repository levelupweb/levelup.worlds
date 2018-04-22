import React, { Component } from 'react';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import ContactForm from '../../components/contactForm/index';
import config from '../../utils/config';
import Modal from '../../components/modal';
import './position.css';

const contactModalConfiguration = {
  title: 'Отклик на вакансию',
  description: 'Ваше сообщение',
  content: 'Оставьте свою контактную информацию, а также рекомендуем прикрепить своё резюме, чтобы увеличить шансы на ответ!',
};

const contactFormFields = [{
  placeholder: 'Ваше имя',
  name: 'name',
  type: 'text',
}, {
  placeholder: 'Ваш E-Mail',
  name: 'email',
  type: 'text',
}, {
  placeholder: 'Контактный телефон',
  name: 'phone',
  type: 'text',
}, {
  placeholder: 'Ссылка на резюме',
  name: 'resume',
  type: 'text',
}, {
  placeholder: 'Ссылка на портфолио',
  name: 'portfolio',
  type: 'text',
}, {
  placeholder: 'Ваше сообщение',
  name: 'message',
  type: 'textarea',
}];

const renderContactForm = title => (
  <ContactForm
    isFluid
    getDefaultValues={() => ({ title })}
    url={config.careerposturl}
    fields={contactFormFields}
  />
);

class Position extends Component {
  renderNeeds() {
    const { needs } = this.props.position;

    return needs.map((item) => {
      if (item === needs.length - 1) {
        return <span key={item}>{item}</span>;
      }
      return <span key={item}>{item}, </span>;
    });
  }

  render() {
    const {
      title, level, description, image, date,
    } = this.props.position;

    if (!this.props.position) return null;

    return (
      <div className="Position">
        <div className="Position-date">{dateFormat(date, 'dd.mm.yy')}</div>
        <div className="Position-content">
          <div className="left">
            <img src={image} width="50px" alt={title} />
          </div>
          <div className="right">
            <h2>{title}</h2>
            <p className="Position-level"><strong>{level}</strong></p>
          </div>
        </div>
        <p>{description}</p>
        <p className="Position-needs"><strong>Требуемые навыки</strong>: {this.renderNeeds()}</p>
        <br />
        <Modal options={contactModalConfiguration} render={renderContactForm(title)}>
          <button className="button">Откликнуться</button>
        </Modal>
      </div>
    );
  }
}

Position.defaultProps = {
  position: null,
};

Position.propTypes = {
  position: PropTypes.shape({
    title: PropTypes.string,
    level: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    needs: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Position;
