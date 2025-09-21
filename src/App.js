import { Provider } from "react-redux";
import "./App.css"
// import GoogleSearch from "./components-pratices/GoogleSearch";
// import PaginatedList from "./components-pratices/PaginatedList";
// import PaginationApi from "./components-pratices/PaginationApi";
// import IceComponent from "./components/redux/IceComponent";

// import ApiCall from "./pratice/apiCall";
// import UrNUcNavebar from "./components/UrNUcNavebar";
import store from "./redux/store";
import IceComponent from "./components/redux/IceComponent";
import CakeComponent from "./components/redux/CakeComponent";
// import DomComp from "./pratice/DomComp";
// import ColorChange from "./components-pratices/ColorChange";
// import ChangeCol from "./pratice/changeCol";
// import Crude from "./pratice/Curd";
//import Dropdown from "./components-pratices/Dropdown";
// import Us_Api from "./components/Ue_Api";
//import Ue_Alert from "./components/Ue_Alert";
//import UmIncresePerfom from "./components/UmIncresePerfom";
// import UcbParent from "./components/UcbParent";
//import ArrValueDelet from "./components-pratices/ArrValueDelet";
//import ListInputCRUD from "./components-pratices/ListInputCRUD";
// import DelCom from "./components/DelCom";
//import UrDom from "./components/UrDom";
//import UrStateStore from "./components/UrStateStore";
// import ApiCall from "./components-pratices/ApiCall";
//import GoodPratice from "./components-pratices/GoodPratice";
//import InputOptimization from "./components-pratices/InputOptimization";
// import Apigetuser from "./components-pratices/Apigetuser";
//import Sqp1 from "./components-pratices/Sqp1";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <Us_Api></Us_Api> */}
      {/* <Ue_Alert></Ue_Alert> */}
      {/* <UmIncresePerfom></UmIncresePerfom> */}
      {/* <UcbParent></UcbParent> */}
      {/* <UrStateStore></UrStateStore> */}
      {/* <UrDom></UrDom>
      <ArrValueDelet></ArrValueDelet> */}
      {/* <DelCom></DelCom> */}
      {/* <ListInputCRUD></ListInputCRUD> */}
      {/* <ApiCall></ApiCall>  */}
      {/* <GoodPratice></GoodPratice>  */}
      {/* <InputOptimization></InputOptimization> */}
      {/* <Apigetuser/> */}
      {/* <Sqp1/> */}
      {/* <Dropdown/> */}
      {/* <ColorChange/> */}

      {/*--------- REDUX -----------*/}
      <CakeComponent/>
      <IceComponent/>
       {/*--------- REDUX -----------*/}
       
      {/* <UrNUcNavebar/> */}
      {/* <GoogleSearch/> */}
      {/* <PaginatedList/> */}
      {/* <PaginationApi/> */}

      {/* ------delet---------- */}
      {/* <Crude/> */}
      {/* <ChangeColor/> */}
      {/* <ApiCall/> */}
      {/* <DomComp/> */}
      {/* <ChangeCol/> */}
      {/* -----delet---------- */}
   
     
    </div>
  </Provider>
  );
}

export default App;
