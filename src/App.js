import React, { Component } from 'react';

import Header from './components/Header';
import Shots from './components/Shots';

import './App.css';

import { name, year } from './data/author';

const styles = {
  textAlign: 'center',
  margin: '35px 0',
  fontSize: '13px',
  color: '#AAA'
};

class App extends Component {
  constructor(){
    super();

    this.state = {
      language: 'EN'
    }
  }

  changeLanguage = (e) => {
    e.preventDefault();
   
    let type = e.target.dataset.language;
    this.setState({
      language: type
    })

  }

  render() {
    console.log(this.state.language)
    return (
      <div>
        <Header />
        <nav className='filters'>
          <ul>
            <li>
              <a href='#'>{(this.state.language === 'EN') ? 'All' : 'Todos' } <i className='fa fa-chevron-down' /> </a>
            </li>
            <li>
              <a href='#'>{(this.state.language === 'EN') ? 'Popular' : 'Populares'} <i className='fa fa-chevron-down' /> </a>
            </li>
            <li>
              <a href='#'>{(this.state.language === 'EN') ? 'Recent' : 'Recientes'} <i className='fa fa-chevron-down' /></a>
            </li>
            <li>
              <a href='#'>{(this.state.language === 'EN') ? 'Debut' : 'Estrenos'} <i className='fa fa-chevron-down' /></a>
            </li>
          </ul>
          <button className="btn" data-language="ES" onClick={ this.changeLanguage }>ES</button>
          <button className="btn" data-language="EN" onClick={ this.changeLanguage }>EN</button>
        </nav>
        <Shots />
        <p style={ styles }>Writen by { name }. { year } .</p>
      </div>
    );
  }
}

export default App;
