import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../components/socials/styles.css';
import './styles.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.revealSocials = this.revealSocials.bind(this);
    this.handleSocialsRef = this.handleSocialsRef.bind(this);
  }

  revealSocials(e) {
    this.socials.classList.add('visible');
    e.target.classList.add('hidden');
  }

  handleSocialsRef(e) {
    this.socials = e;
  }

  renderSocials() {
    const { socials } = this.props.user;

    return socials.map((item) => {
      const { link, title } = item;
      return (
        <a className="social" key={title} href={link} target="_blank">
          <li><i className={`fa fa-${title}`} href={link} /></li>
        </a>
      );
    });
  }

  render() {
    const { user } = this.props;

    if (!user) return null;

    const {
      name,
      description,
      image,
    } = user;

    return (
      <div className="item user">
        <img
          src={image}
          className="image"
          alt={name}
        />
        <div className="content">
          <div className="name">
            <h3>{name}</h3>
          </div>
          <div className="description">
            {description}
          </div>
          <button className="button small" onClick={this.revealSocials}>
						Follow
          </button>
          <ul className="socials center" ref={this.handleSocialsRef}>
            {this.renderSocials()}
          </ul>
        </div>
      </div>
    );
  }
}

Item.defaultProps = {
  user: null,
};

Item.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })),
  }),
};

export default Item;
