import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Note from './components/Note.jsx'

ReactDOM.render(
  <div>
    <Header />
    <Note />
    <Footer />
  </div>
,document.getElementById('root')
);
