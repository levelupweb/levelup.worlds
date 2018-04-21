import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class NoMatch extends React.Component {
  render() {
    return (
      <div className="Container NoMatch fullpage">
      	<h1>Oops..</h1>
      	<p className="primary">404. Возможно, этой страницы больше не существует или никогда не существовала</p>
      	<Link to=""><button className="button">На главную</button></Link>
      </div>
    );
  }
}
