/* eslint-disable prettier/prettier */

import { SafeAreaView} from 'react-native';
import Login from './modules/login';
import { Routes } from './routes';
import { Provider } from 'react-redux';
import store from './store';




const App = () => {
  return(
  <Provider store={store}>
    <Routes/>
  </Provider>
  ) 
};

export default App;
