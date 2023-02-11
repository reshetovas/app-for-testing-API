//import {pedro} from "../controllers/obj.js"
import axios from 'axios'
import React from 'react';
import { data } from "../controllers/obj.js"

function Test () {


   // let [pedro, setPedeo] = React.useState({});
   // axios.get('https://639a1f2f16b0fdad7754d733.mockapi.io/cart').then((res) =>{
   // setPedeo(res.data);
   // });

  // const { data } = axios.get('https://639a1f2f16b0fdad7754d733.mockapi.io/cart');

   return(
      <div>Тест - 
      <button onClick={data}>Отправить credit_requests</button>
      </div>
   )
}

export default Test