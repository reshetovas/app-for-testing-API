import axios from 'axios';



//export const { data } = axios.get('https://639a1f2f16b0fdad7754d733.mockapi.io/cart/1');
export async function data () {
axios.get('https://639a1f2f16b0fdad7754d733.mockapi.io/cart/1')
.then(res => {const pedro = res.data});
console.log(pedro)
}

export const kolvo = 1

export const auth = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZXZvIiwiYXV0aCI6ImFkbWluaXN0cmF0b3IiLCJleHAiOjE2NzM4OTU3Njd9.FFtZme2QfnLEDO65gJBKpI_Xs8yihWM_7mLSbmvHTLaDy0xBAVIhDtAfG5ii6uCxEkp1Ij9DnRJWoCLwx7jRpw';

//PAYLATE
//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYXlsYXRlIiwiYXV0aCI6ImFkbWluaXN0cmF0b3IiLCJleHAiOjE2NzQwNzg5MTV9.OQRl6-AUyykwD0m21kQivOZqFx2l7-ofqAsSSNaSlAPScq2sjHDclji1-uOzaCEsedNqTXpOWrx6xhn1hkw_ww
//REVO
//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZXZvIiwiYXV0aCI6ImFkbWluaXN0cmF0b3IiLCJleHAiOjE2NzM4OTU3Njd9.FFtZme2QfnLEDO65gJBKpI_Xs8yihWM_7mLSbmvHTLaDy0xBAVIhDtAfG5ii6uCxEkp1Ij9DnRJWoCLwx7jRpw

export const Obj = {
   id: 261222001, //!!!ID измени! Но себе не изменяй! (будет увеличиваться на 1)
   amount: 5000, //сумма займа
   personId: "624301528", //ID заёмщика PAYLATE PL111222333 REVO 624301528
   date: "2022-12-28", //дата выдачи
   endDate: "2023-01-28", // плановая дата погашения <=> датаплатежа
   fullCost: 300, //сумма всех % по договору
   calculation: 100, // сумма регламентных
   calculationDate: "2022-12-31" // end_date для calculation
}; 