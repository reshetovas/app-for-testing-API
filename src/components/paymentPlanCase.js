function PaymentPlanRevo({pushPaymentPlan}) {
   const onClickPlus = ({}) => {
//      console.log(pushRequests()) //переменная obj = {title, price, imageUrl} => функция onClickAdd
      pushPaymentPlan();
      alert('Ушли запросы, смотри консоль')
   }
   return(
      
      <div>Тут график платежей - 
      <button onClick={onClickPlus}>Отправить payment_plan</button>
      </div>
   )
}

export default PaymentPlanRevo;