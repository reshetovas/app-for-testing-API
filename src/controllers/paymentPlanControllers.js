import {Obj, kolvo} from "./obj.js"
export const arrPaymentPlan = []

// export const objPaymentPlan = {id: 888888000, amount: 5000, personId: 624301528, date: "2022-12-18", endDate: "2023-01-25"}; //!!!ID измени! Но себе не изменяй!
for (let i=0; i<=kolvo; i++) {
let createId = Obj.id + i
let createSum = Obj.amount + (i*100)
let createOutPayment = createSum + Obj.fullCost
let createPaymentPercent = Obj.fullCost - Obj.calculation
// let createElementId = obj.elementId + i
  arrPaymentPlan.push({
   "contractId": ""+createId+"",
   "id": ""+createId+"",
   "stages": [
     {
       "amount": createOutPayment,
       "date": Obj.endDate+"T00:00:00.0Z",
       "mainAmount": createSum,
       "mainBalance": 0,
       "penaltyAmount": 0,
       "percentAmount": createPaymentPercent
     }
   ]
 })
}

export const pushPaymentPlan = () => {
for (let i=0; i<=kolvo; i++) {
  const url = 'https://usrt.sptnk.co/api/external/v1/credit-payment-plans';
  // var url = 'http://localhost:4444/requests';
  let planBody = arrPaymentPlan[i]
     fetch(url, {
           method: 'post',
           mode: 'cors',
           cache: 'no-cache',
           credentials: 'same-origin',
           headers: {
             "Content-type": "application/json",
             "Authorization": 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZXZvIiwiYXV0aCI6ImFkbWluaXN0cmF0b3IiLCJleHAiOjE2NzM4OTU3Njd9.FFtZme2QfnLEDO65gJBKpI_Xs8yihWM_7mLSbmvHTLaDy0xBAVIhDtAfG5ii6uCxEkp1Ij9DnRJWoCLwx7jRpw'
           },
           redirect: 'follow',
           referrerPolicy: 'no-referrer',
           body: JSON.stringify(planBody),
         })
         .then(response => response.json()) // callBack переводится в JSON
         .then(res => console.log(res))
         console.log(arrPaymentPlan[i])
        }
    };
