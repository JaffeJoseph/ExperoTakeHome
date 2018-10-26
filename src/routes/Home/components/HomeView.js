import React from 'react';
import './HomeView.scss';
import PortMap from 'components/PortMap';
import LeftBar from 'components/LeftBar';

export const HomeView = () => (
  <div>
    <h4>Port Map</h4>
    <PortMap className="home--portMap" />
    <LeftBar className="home--leftBar" />

  </div>
);

export default HomeView;
