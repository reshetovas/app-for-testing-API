import {Obj, kolvo, auth} from "./obj.js"
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

export async function pushContract () {
for (let i=0; i<=kolvo; i++) {
  const url = 'https://usrt.sptnk.co/api/external/v1/credit-contracts';
  // var url = 'http://localhost:4444/requests';
  let contBody = await arrContract[i]
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
           body: JSON.stringify(contBody),
         })
        const data = await request.json()
        console.log(data)
        console.log(arrContract[i])

        if (!request.ok) {
          alert("Отправка остановлена, возьми последний id и продожай!!! В твоих руках будущий ты и сын твой молодец, мне кажется")
          break
        }
        }
    }


