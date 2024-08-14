import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store.js'
import CakeContainer from './components/CakeContainer.js';
import HooksCakeContainer from './components/HooksCakeContainer.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <HooksCakeContainer/>
        <CakeContainer/>
      </div>
    </Provider>
  );
}
export default App;
