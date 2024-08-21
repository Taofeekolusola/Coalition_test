import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store.js'
// import CakeContainer from './components/CakeContainer.js';
// import HooksCakeContainer from './components/HooksCakeContainer.js';
// import IceCreamContainer from './components/IceCreamContainer.js';
// import HooksIceCreamContainer from './components/HooksIceCreamContainer.js';
// import NewCakeContainer from './components/NewCakeContainer.js';
// import ItemContainer from './components/ItemContainer.js';
import UserContainer from './components/UserContainer.js';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      {/* <ItemContainer cake/>
      <ItemContainer/>
      <HooksCakeContainer/>
        <CakeContainer/>
        <NewCakeContainer />
        <HooksIceCreamContainer/>
        <IceCreamContainer/> */}
      </div>
    </Provider>
  );
}
export default App;
