import React, { Component } from 'react';
import Navigation from './Navigation';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div >
          <h3>Rua Prefeito Baltazar Buschle, 312, Joinville, Santa Catarina, 89228-000</h3>
        </div>
        <Navigation / >
      </div>
    )
  }
}
