import { Provider } from "react-redux";
import "./App.css"
import TestComp from "./testing/TestComp"

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      {/*--------- REDUX -----------*/}
      {/* <CakeComponent/> */}
      {/* <IceComponent/> */}
       {/*--------- REDUX -----------*/}

       {/* --------- TEST__________ */}
       <TestComp/>
        {/* --------- TEST__________ */}

      {/* ------delet---------- */}
      {/* -----delet---------- */}
   
     
    </div>
  // </Provider>
  );
}

export default App;
