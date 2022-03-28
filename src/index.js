import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Note from './components/Note.jsx'


ReactDOM.render(
  <div className="page">
  <div>
    <Header />
    <Note 
      contact="My contact" 
      fname="Pinhani!!" 
      img="https://m.media-amazon.com/images/I/41fIGML3V0L._SX355_.jpg" phone="+90 123 123 1234" 
      email="k@software.com"/>
    <Note 
      contact="My contact" 
      fname="PINHANI!!" 
      img="https://i.scdn.co/image/ab67616d0000b2730ba224443629fe816c430bbc" phone="+90 123 123 1234" 
      email="k@software.com"/>
    </div>
    <div>
        <Footer />
    </div>
  </div>
,document.getElementById('root')
);
