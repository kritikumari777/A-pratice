// Action is responsible for duing the action having the type property, the action tell that
// which type of action gona to do

import { BY_CAKE } from "./cakeType"

 export const byCake = () =>{
   return {
    type : BY_CAKE
   }
}

