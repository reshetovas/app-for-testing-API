import {Obj, kolvo} from "./obj.js"
export const arrOutPayment = []

// export const objOutPayment = {id: 888888000, amount: 5000, personId: 624301528, date: "2022-12-18", endDate: "2023-01-25"}; //!!!ID измени! Но себе не изменяй!
for (let i=0; i<=kolvo; i++) {
let createId = Obj.id + i
let createSum = Obj.amount + (i*100)
let createOutPayment = createSum + Obj.fullCost
// let createElementId = obj.elementId + i
  arrOutPayment.push({
   "amount": createOutPayment,
   "contractId": ""+createId+"",
   "date": Obj.date+"T00:00:00.000Z",
   "datePlan": Obj.date+"T00:00:00.000Z",
   "id": ""+createId+"",
   "indexNumber": 1,
   "mainAmount": createSum,
   "percentAmount": Obj.fullCost,
   "principalBalance": createOutPayment,
   "type": "OUTGOING_PAYMENT_AGENT"
 })
}

export const pushOutPayment = () => {
for (let i=0; i<=kolvo; i++) {
  const url = 'https://usrt.sptnk.co/api/external/v1/payments';
  // var url = 'http://localhost:4444/requests';
  let outBody = arrOutPayment[i]
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
           body: JSON.stringify(outBody),
         })
         .then(response => response.json()) // callBack переводится в JSON
         .then(res => console.log(res))
         console.log(arrOutPayment[i])
        }
    }
