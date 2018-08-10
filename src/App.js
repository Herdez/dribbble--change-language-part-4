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

  renderListBasedOnLanguage = (e) => {
    if (this.state.language === 'EN') {
       return ( 
          <ul>
            <li>
              <a href='#'>All <i className='fa fa-chevron-down' /> </a>
            </li>
            <li>
              <a href='#'>Popular <i className='fa fa-chevron-down' /> </a>
            </li>
            <li>
              <a href='#'>Recent <i className='fa fa-chevron-down' /></a>
            </li>
            <li>
              <a href='#'>Debut <i className='fa fa-chevron-down' /></a>
            </li>
          </ul>
        );
      } else {
       return ( 
          <ul>
            <li>
              <a href='#'>Todos <i className='fa fa-chevron-down' /> </a>
            </li>
            <li>
              <a href='#'>Populares <i className='fa fa-chevron-down' /> </a>
            </li>
            <li>
              <a href='#'>Recentes <i className='fa fa-chevron-down' /></a>
            </li>
            <li>
              <a href='#'>Estrenos <i className='fa fa-chevron-down' /></a>
            </li>
          </ul>
        );
      }
  }

  render() {
    console.log(this.state.language)
    return (
      <div>
        <Header />
        <nav className='filters'>
          <button className="btn" data-language="ES" onClick={ this.changeLanguage }>ES</button>
          <button className="btn" data-language="EN" onClick={ this.changeLanguage }>EN</button>
          { this.renderListBasedOnLanguage() }
        </nav>
        <Shots />
        <p style={ styles }>Writen by { name }. { year } .</p>
      </div>
    );
  }
}

export default App;
