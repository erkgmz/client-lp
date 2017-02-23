import React, { PropTypes } from 'react';
import Header from './components/common/Header';
import Footer from './components/footer/Footer';

import './styles/_base.scss';

const App = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
