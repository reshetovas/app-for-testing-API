function IncPaymentRevo({pushIncPayment}) {
   const onClickPlus = ({}) => {
//      console.log(pushRequests()) //переменная obj = {title, price, imageUrl} => функция onClickAdd
      pushIncPayment();
      alert('Ушли запросы, смотри консоль')
   }
   return(
      <div>Тут платеж - 
      <button onClick={onClickPlus}>Отправить incoming_payment</button>
      </div>
   )
}

export default IncPaymentRevo;