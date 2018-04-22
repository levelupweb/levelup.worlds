import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles.css';
import config from '../../utils/config';
import NoMatch from '../../components/noMatch';

const notFound = () => (
  <section className="fullpage center first notFound">
    <Helmet>
      <title>404 Not Found</title>
      <meta name="description" content="404 Page of Levelup Boilerplate" />
      <meta name="keywords" content="react, express, es6, javascript, webpack" />
      <meta name="author" content="Levelup Web" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Levelup Boilerplate 404 Page" />
      <meta property="og:title" content="Levelup Boilerplate" />
      <meta property="og:description" content="This is an exprensive boilerplate for creating rich sites" />
    </Helmet>
    <NoMatch />
  </section>
);

export default notFound;
