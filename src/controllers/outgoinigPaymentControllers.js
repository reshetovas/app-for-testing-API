import {Obj, kolvo, auth} from "./obj.js"
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

export async function pushOutPayment () {
for (let i=0; i<=kolvo; i++) {
  const url = 'https://usrt.sptnk.co/api/external/v1/payments';
  // var url = 'http://localhost:4444/requests';
  let outBody = await arrOutPayment[i]
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
           body: JSON.stringify(outBody),
         })
  const data = await request.json()
    console.log(data)
    console.log(arrOutPayment[i])

    if (!request.ok) {
      alert("Отправка остановлена, возьми последний id и продожай!!! В твоих руках будущий ты и сын твой молодец, мне кажется")
      break
    }
        }
    }


