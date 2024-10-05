import logo from "./logo.svg";
import "./App.css";
import Shop from "./component/Shop";
import Buy from "./component/Buy";
import Return from "./component/Return";
import { Provider } from "react-redux";
// import { store } from "./redux/redux";
import ShirtShop from "./redux/shirt/ShirtShop";
import {store} from './redux/store'
function App() {
  
  return (
    // all the file is in same file

    // <Provider store={store}>
    //   <div className="App">
    //     REDUX IMPLIMENTATION
    //     <Shop />
    //     <Buy />
    //     <br/>
    //     <Return />
    //   </div>
    // </Provider>

    // all file is in different file

    <Provider store={store}>
      <div className="App">
        REDUX IMPLIMENTATION
        <ShirtShop/>
      </div>
    </Provider>
  );
}

export default App;
