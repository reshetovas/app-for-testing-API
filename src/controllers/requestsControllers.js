import {Obj, kolvo} from "./obj.js"

export const arrRequests = []

// export const objRequests = {id: 888888000, amount: 5000, personId: 624301528}; //!!!ID измени! Но себе не изменяй!
for (let i=0; i<=kolvo; i++) {
let createId = Obj.id + i
let createSum = Obj.amount + (i*100)
// let createElementId = obj.elementId + i
  arrRequests.push({
    "amount": createSum,
    "channel": "ONLINE",
    "fullCost": 10000,
    "fullCostPercent": 12.34,
    "id": ""+createId+"", // для PayLate - ""+PL+createId+""
    "partner": "Магазин",
    "period": 14,
    "periodType": "MONTH",
    "personId": ""+Obj.personId+"",
    "productId": "PR2",
    "rate": 0.01
  })
}
// console.log(arr[0])

//   const test = {
//     "amount": 1000,
//     "channel": "ONLINE",
//     "fullCost": 10000,
//     "fullCostPercent": 12.34,
//     "id": "111222337",
//     "partner": "Магазин",
//     "period": 14,
//     "periodType": "MONTH",
//     "personId": "624301528",
//     "productId": "PR2",
//     "rate": 0.01
//  };



export const pushRequests = () => {
for (let i=0; i<=kolvo; i++) {
  const url = 'https://usrt.sptnk.co/api/external/v1/credit-requests';
  // var url = 'http://localhost:4444/requests';
  let recBody = arrRequests[i]
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
           body: JSON.stringify(recBody),
         })
         .then(response => response.json()) // callBack переводится в JSON
         .then(res => console.log(res))
         console.log(arrRequests[i])
        }
    }

