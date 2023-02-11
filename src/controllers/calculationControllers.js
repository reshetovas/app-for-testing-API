import {Obj, kolvo, auth} from "./obj.js"
export const arrCalculation = []

// export const objCalculation = {id: 888888000, amount: 5000, personId: 624301528, date: "2022-12-18", endDate: "2023-01-25"}; //!!!ID измени! Но себе не изменяй!
for (let i=0; i<=kolvo; i++) {
let createId = Obj.id + i
let createSum = Obj.amount + (i*100)
let createOutPayment = createSum + Obj.fullCost
// let createElementId = obj.elementId + i
  arrCalculation.push({
   "accruedInterest": Obj.calculation,
   "creditContractId": ""+createId+"",
   "endDate": Obj.calculationDate+"T00:00:00.0Z",
   "principalBalance": createOutPayment,
   "startDate": "2020-10-01T00:00:00.0Z"
 })
}

export async function pushCalculation () {
for (let i=0; i<=kolvo; i++) {
  const url = 'https://usrt.sptnk.co/api/external/v1/calculations';
  // var url = 'http://localhost:4444/requests';
  let calBody = await arrCalculation[i]
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
           body: JSON.stringify(calBody),
         })
        const data = await request.json()
        console.log(data)
        console.log(arrCalculation[i])

        if (!request.ok) {
          alert("Отправка остановлена, возьми последний id и продожай!!! В твоих руках будущий ты и сын твой молодец, мне кажется")
          break
        }
        }
    }