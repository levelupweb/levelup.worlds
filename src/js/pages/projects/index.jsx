import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../utils/config';
import './styles.css';

export default () => (
  <div className="page-team page">
    <Helmet>
      <title>Наши проекты - Levelup Worlds</title>
      <meta name="description" content="Проекты Levelup Worlds. Digital-студия полного цикла" />
    </Helmet>
    <div className="">
      <div className="block">
        <div className="block-title left" id="prices">
          <h5 className="super title">
						Наши проекты
          </h5>
          <p className="description">
            Продукты, над которыми работает наша команда
          </p>
        </div>
      </div>
      <div className="block">
        <p className="primary">
          Levelupworlds - это digital-агентство, оказывающее услуги во всех смежных областях. Видеосъемка, фотография, веб-разработка,{' '}
          разработка мобильных приложений, звукозапись, продвижение в интернете и социальных сетях.
        </p>
      </div>
      <div className="block">
        <div className="projects">
          <div className="project">
            <div className="image">
              <a href="https://levelup.name/" rel="noreferrer noopener" target="_blank">
                <img
                  src={`${config.static}/img/logo-name.png`}
                  width="64px"
                  alt="Levelup Name"
                />
              </a>
            </div>
            <div className="title">
              <h3>
                <a href="https://levelup.name/" rel="noreferrer noopener" target="_blank">
                  Name
                </a>
              </h3>
              <p>Блог-платформа</p>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <a href="https://web.levelupworlds.com/" rel="noreferrer noopener" target="_blank">
                <img
                  src={`${config.static}/img/logo-web.png`}
                  width="64px"
                  alt="Levelup Web"
                />
              </a>
            </div>
            <div className="title">
              <h3>
                <a href="https://web.levelupworlds.com" rel="noreferrer noopener" target="_blank">
                  Web
                </a>
              </h3>
              <p>Разработка</p>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <a href="https://levelupmag.com/" rel="noreferrer noopener" target="_blank">
                <img
                  src={`${config.static}/img/logo-magazine.png`}
                  width="64px"
                  alt="Levelup Magazine"
                />
              </a>
            </div>
            <div className="title">
              <h3>
                <a href="https://levelupmag.com/" rel="noreferrer noopener" target="_blank">
                  Magazine
                </a>
              </h3>
              <p>Журнал</p>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <a href="https://music.levelupworlds.com/" rel="noreferrer noopener" target="_blank">
                <img
                  src={`${config.static}/img/logo-music.png`}
                  width="64px"
                  alt="Levelup Music"
                />
              </a>
            </div>
            <div className="title">
              <h3>
                <a href="https://music.levelupworlds.com/" rel="noreferrer noopener" target="_blank">
                  Music
                </a>
              </h3>
              <p>Звукозапись</p>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <a href="https://smm.levelupworlds.com/" rel="noreferrer noopener" target="_blank">
                <img
                  src={`${config.static}/img/logo-promo.png`}
                  width="64px"
                  alt="Levelup Promo"
                />
              </a>
            </div>
            <div className="title">
              <h3>
                <a href="https://smm.levelupworlds.com/" rel="noreferrer noopener" target="_blank">
                  SMM
                </a>
              </h3>
              <p>Продвижение</p>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <a href="https://film.levelupworlds.com/" rel="noreferrer noopener" target="_blank">
                <img
                  src={`${config.static}/img/logo-film.png`}
                  width="64px"
                  alt="Levelup Promo"
                />
              </a>
            </div>
            <div className="title">
              <h3>
                <a href="https://film.levelupworlds.com/" rel="noreferrer noopener" target="_blank">
                  Film
                </a>
              </h3>
              <p>Видеосъемка</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <p className="primary">
          Наш список продуктов постоянно пополняется. Мы считаем необходимым не только работать над коммерческими продуктами,{' '}
          но и над собственными.
        </p>
      </div>
    </div>
  </div>
);
