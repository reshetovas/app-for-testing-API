import {Obj, kolvo} from "./obj.js"
export const arrContract = []

// export const objContract = {id: 888888000, amount: 5000, personId: 624301528, date: "2022-12-18", endDate: "2023-01-25"}; //!!!ID измени! Но себе не изменяй!
for (let i=0; i<=kolvo; i++) {
let createId = Obj.id + i
let createSum = Obj.amount + (i*100)
// let createElementId = obj.elementId + i
  arrContract.push({
   "amount": createSum,
   "debtLimit": 1.1,
   "endDate": Obj.endDate+"T00:00:00.000Z",
   "fullCost": Obj.fullCost,
   "fullCostPercent": 12.34,
   "id": ""+createId+"", // для PayLate - ""+PL+createId+""
   "insurance": 1000,
   "num": ""+createId+"",
   "personId": ""+Obj.personId+"",
   "pledge": createSum,
   "rate": 0.01,
   "requestId": ""+createId+"", // для PayLate - ""+PL+createId+""
   "startDate": Obj.date+"T00:00:00.000Z",
   "statusUpdatedAt": Obj.date+"T00:00:00.000Z",
 })
}

export const pushContract = () => {
for (let i=0; i<=kolvo; i++) {
  const url = 'https://usrt.sptnk.co/api/external/v1/credit-contracts';
  // var url = 'http://localhost:4444/requests';
  let contBody = arrContract[i]
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
           body: JSON.stringify(contBody),
         })
         .then(response => response.json()) // callBack переводится в JSON
         .then(res => console.log(res))
         console.log(arrContract[i])
        }
    }
