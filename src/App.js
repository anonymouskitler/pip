import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer'
import store from './wit/stores/store'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider> 
    );
  }
}

export default App;
