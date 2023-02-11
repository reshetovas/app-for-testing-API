import {Obj, kolvo, auth} from "./obj.js"

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
    "personId": Obj.personId,
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



export async function pushRequests() {
  // const delay = ms => {
  //   return new Promise(r => setTimeout(() => r(), ms))
  // }

for (let i=0; i<=kolvo; i++) {
const url = 'https://usrt.sptnk.co/api/external/v1/credit-requests';
  // var url = 'http://localhost:4444/requests';
let recBody = await arrRequests[i]
  //  return delay(20000).then(() => 
// try{
  const request = await fetch(url, {
    method: 'post',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      "Content-type": "application/json",
      "Authorization": auth
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(recBody),
  })
  // .then(response => response.json()) // callBack переводится в JSON
  // .then(res => console.log(res))
  const data = await request.json()
  console.log(data)
  console.log(arrRequests[i])

  if (!request.ok) {
    alert("Отправка остановлена, возьми последний id и продожай!!! В твоих руках будущий ты и сын твой молодец, мне кажется")
    break
  }
// } catch(400) {
//   console.log('ERROR', 400)
//   i = kolvo
// }
        }
    }


//PAYLATE
//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYXlsYXRlIiwiYXV0aCI6ImFkbWluaXN0cmF0b3IiLCJleHAiOjE2NzQwNzg5MTV9.OQRl6-AUyykwD0m21kQivOZqFx2l7-ofqAsSSNaSlAPScq2sjHDclji1-uOzaCEsedNqTXpOWrx6xhn1hkw_ww
//REVO
//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZXZvIiwiYXV0aCI6ImFkbWluaXN0cmF0b3IiLCJleHAiOjE2NzM4OTU3Njd9.FFtZme2QfnLEDO65gJBKpI_Xs8yihWM_7mLSbmvHTLaDy0xBAVIhDtAfG5ii6uCxEkp1Ij9DnRJWoCLwx7jRpw