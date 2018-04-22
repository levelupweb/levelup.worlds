import React, { Component } from 'react';
import './styles.css';
import Jumbotron from './jumbotron';

class Index extends Component {
  render() {
    return (
      <div>
        <section className="fullpage center blocks" style={{ borderBottom: 0 }}>
          <div className="container text">
            <div className="block">
              <Jumbotron onLocation={this.changeSection} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;
