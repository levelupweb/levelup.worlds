import React from 'react';
import Socials from '../socials';
import './styles.css';

export default ({ page }) => {
  if (!page) {
    return (
      <div className="footer">
        <div className="footer-wrapper">
          <p className="spacing">
						Создано с любовью в{' '}
            <a href="http://web.levelupworlds.com" target="_blank">Levelup Web</a>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="footer onPage">
      <div className="footer-wrapper">
        <div className="left">
						Создано в <a href="http://web.levelupworlds.com">Levelup Web</a> с любовью
        </div>
        <div className="right">
          <Socials />
        </div>
      </div>
    </div>
  );
};

