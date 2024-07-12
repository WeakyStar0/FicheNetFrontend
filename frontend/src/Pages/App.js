import React from 'react';

import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Bem-vindo à FicheNet</title>
      </Helmet>

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;