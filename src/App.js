import React, {PropTypes} from 'react';
import Header from './components/Header';

import './styles/_base.scss';

const App = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
