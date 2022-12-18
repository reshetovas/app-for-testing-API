function IncPaymentRevo({pushIncPayment}) {
   const onClickPlus = ({}) => {
//      console.log(pushRequests()) //переменная obj = {title, price, imageUrl} => функция onClickAdd
      pushIncPayment();
      alert('МОЯ ПУСИ ДЛЯ НЕГО ВСЕГДА ГОТОВА, а ты консоль смотри!')
   }
   return(
      <div>Тут платеж - 
      <button onClick={onClickPlus}>Отправить incoming_payment</button>
      </div>
   )
}

export default IncPaymentRevo;