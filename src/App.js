import { Provider } from "react-redux";
import "./App.css"

import store from "./redux/store";
import CakeComponent from "./components-redux/CakeComponent";
import IceComponent from "./components-redux/IceComponent";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/*--------- REDUX -----------*/}
      <CakeComponent/>
      <IceComponent/>
      {/*--------- REDUX -----------*/}

      {/* --------- TEST__________ */}
      {/* <TestComp/> */}
      {/* --------- TEST__________ */}

      {/* ------delet---------- */}
      {/* -----delet---------- */}
   
     
    </div>
  </Provider>
  );
}

export default App;
