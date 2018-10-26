import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import { IndexLink, Link } from 'react-router';
import './LeftBar.scss';
// import cruiseIcon from './assets/cruise.png';
// import portIcon from './assets/port.png';
import ApiService from 'services/api.service';

export default class LeftBar extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  componentWillMount() {
  }

  render() {
    const className = classnames("leftbar--root", this.props.className);

    return <div className={className} />;
  }

  loadNavData() {
    try {
      async() => {
        const harbors = await this.requestData();
        return harbors;
      };
    }
    catch (e) {
      console.log("error loading harbors", e);
    }
  }

  async requestData() {
    const response = await ApiService.getAllHarbors();
    const data = await response.json();
    return data.ports;
  }
}
