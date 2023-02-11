import React from 'react';
import axios from 'axios';
import styles from './Form.module.scss';

function StartForm(props) {
   const id = React.useId();
   const [inputKolvo, setInputKolvo] = React.useState('');
   const [inputId, setInputId] = React.useState('');
   const [inputAmount, setInputAmount] = React.useState('');
   const [inputPersonId, setInputPersonId] = React.useState('');
   const [inputDate, setInputDate] = React.useState('');
   const [inputEndDate, setInputEndDate] = React.useState('');
   const [inputFullCost, setInputFullCost] = React.useState('');
   const [inputCalculation, setInputCalculation] = React.useState('');
   const [inputCalculationDate, setInputCalculationDate] = React.useState('');
   
   function updateInputValue(e) {
      e.preventDefault()
      // state.kolvo = input
      const state = {
         kolvo: Number(inputKolvo)-1,
         externalId: Number(inputId),
         amount: Number(inputAmount),
         personId: Number(inputPersonId),
         date: inputDate,
         endDate: inputEndDate,
         fullCost: Number(inputFullCost),
         calculation:Number(inputCalculation),
         calculationDate: inputCalculationDate
      };
      console.log(state)
      axios.put('https://639a1f2f16b0fdad7754d733.mockapi.io/cart/1', state)
      .then(() => alert('УСПЕШНО'))
      .catch((err) => console.log('ОШИБКА', err)).wait(() => alert('Ошибка'))
    }

   return (
      <div className={styles.startForm}>
         <h2> Ввведите начальные данные</h2>
         <form onSubmit={updateInputValue}>
            <label htmlFor={id}>Введите количество запросв:</label>
               <input 
                  id={id}
                  placeholder="3"
                  value={inputKolvo} 
                  type="number"
                  onChange={e => setInputKolvo(e.target.value)}
               />
            <label htmlFor={id}>Введите начальный ID <br/>(id каждого запроса будет увеличиваться на 1):</label>
               <input 
                  id={id} 
                  value={inputId} 
                  type="number"
                  placeholder="888778000"
                  onChange={e => setInputId(e.target.value)}
               />
            <label htmlFor={id}>Введите сумму выдачи<br/>(сумма выдачи в каждом запроса будет увеличиваться на 100):</label>
               <input 
                  id={id} 
                  value={inputAmount} 
                  type="number"
                  placeholder="5000"
                  onChange={e => setInputAmount(e.target.value)}
               />
            <label htmlFor={id}>Введите ID заёмщика<br/>(Константа, остается неизменной во всех запросах):</label>
               <input 
                  id={id} 
                  value={inputPersonId} 
                  type="number"
                  placeholder="624301528"
                  onChange={e => setInputPersonId(e.target.value)}
               />
            <label htmlFor={id}>Введите дату выдачи<br/>(Константа, остается неизменной во всех запросах):</label>
                  <input 
                     id={id} 
                     value={inputDate} 
                     type="string"
                     placeholder="2022-12-18"
                     onChange={e => setInputDate(e.target.value)}
                  />
               <label htmlFor={id}>Введите плановую дату погашения займа (credit_contract.end_date)<br/>(Константа, остается неизменной во всех запросах)<br/>*Эта дата будет использоваться как дата платежа:</label>
                  <input 
                     id={id} 
                     value={inputEndDate} 
                     type="string"
                     placeholder="2023-01-25"
                     onChange={e => setInputEndDate(e.target.value)}
                  />
               <label htmlFor={id}>Сумма всех % по займу<br/>(Константа, остается неизменной во всех запросах):</label>
                  <input 
                     id={id} 
                     value={inputFullCost} 
                     type="number"
                     placeholder="300"
                     onChange={e => setInputFullCost(e.target.value)}
                  />
               <label htmlFor={id}>Сумма регламентных начсилений<br/>(Константа, остается неизменной во всех запросах):</label>
                  <input 
                     id={id} 
                     value={inputCalculation} 
                     type="number"
                     placeholder="100"
                     onChange={e => setInputCalculation(e.target.value)}
                  />
               <label htmlFor={id}>Дата регламентных начислений<br/>(Константа, остается неизменной во всех запросах):</label>
                  <input 
                     id={id} 
                     value={inputCalculationDate} 
                     type="string"
                     placeholder="2022-12-31"
                     onChange={e => setInputCalculationDate(e.target.value)}
                  />
            <button>Отправить</button>
         </form>
      </div>
   );
}


export default StartForm;