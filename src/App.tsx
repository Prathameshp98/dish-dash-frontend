import React from 'react';
import './App.css';

import Header from './Components/header';
import Body from './Components/body';
import Footer from './Components/footer';

const App: React.FC = () => {

  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
