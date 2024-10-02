import logo from "./logo.svg";
import "./App.css";
import Shop from "./component/Shop";
import Buy from "./component/Buy";
import Return from "./component/Return";
import { Provider } from "react-redux";
import { store } from "./redux/redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        REDUX IMPLIMENTATION
        <Shop />
        <Buy />
        <Return />
      </div>
    </Provider>
  );
}

export default App;
