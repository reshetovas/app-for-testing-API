function PaymentPlanRevo({pushPaymentPlan}) {
   const onClickPlus = ({}) => {
//      console.log(pushRequests()) //переменная obj = {title, price, imageUrl} => функция onClickAdd
      pushPaymentPlan();
      alert('МОЯ ПУСИ ДЛЯ НЕГО ВСЕГДА ГОТОВА, а ты консоль смотри!')
   }
   return(
      
      <div>Тут график платежей - 
      <button onClick={onClickPlus}>Отправить payment_plan</button>
      </div>
   )
}

export default PaymentPlanRevo;