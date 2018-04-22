import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import config from '../../utils/config';
import './styles.css';

const Header = ({ location }) => (
  <div className="header block">
    <nav className="navigation">
      <ul>
        <Link
          to="/partner"
        >
          <li className={location.pathname === '/partner' && 'active'}>Партнерам</li>
        </Link>
        <Link
          to="/career"
        >
          <li className={location.pathname === '/career' && 'active'}>Карьера</li>
        </Link>
        <Link
          to="/team"
        >
          <li className={location.pathname === '/team' && 'active'}>Команда</li>
        </Link>
        <Link
          to="/contact"
        >
          <li className={location.pathname === '/contact' && 'active'}>Контакты</li>
        </Link>
        <Link
          to="/projects"
        >
          <li className={location.pathname === '/projects' && 'active'}>Проекты</li>
        </Link>
      </ul>
      <ul className="header-logo">
        <Link to="/">
          <img src={`${config.static}/img/logo-default.png`} alt="Levelup Web" />
        </Link>
      </ul>
    </nav>
  </div>
);

export default withRouter(Header);

