function OutPaymentRevo({pushOutPayment}) {
   const onClickPlus = ({}) => {
//      console.log(pushRequests()) //переменная obj = {title, price, imageUrl} => функция onClickAdd
      pushOutPayment();
      alert('Ушли запросы, смотри консоль')
   }
   return(
      <div>Тут выдача - 
      <button onClick={onClickPlus}>Отправить outgoing_payment</button>
      </div>
   )
}

export default OutPaymentRevo;