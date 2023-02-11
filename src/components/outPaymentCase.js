function OutPaymentRevo({pushOutPayment}) {
   const onClickPlus = ({}) => {
//      console.log(pushRequests()) //переменная obj = {title, price, imageUrl} => функция onClickAdd
      pushOutPayment();
      alert('МОЯ ПУСИ ДЛЯ НЕГО ВСЕГДА ГОТОВА, а ты консоль смотри!')
   }
   return(
      <div>Тут выдача - 
      <button onClick={onClickPlus}>Отправить outgoing_payment</button>
      </div>
   )
}

export default OutPaymentRevo;