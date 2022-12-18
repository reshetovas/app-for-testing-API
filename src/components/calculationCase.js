function IncPaymentRevo({pushCalculation}) {
   const onClickPlus = ({}) => {
//      console.log(pushRequests()) //переменная obj = {title, price, imageUrl} => функция onClickAdd
      pushCalculation();
      alert('МОЯ ПУСИ ДЛЯ НЕГО ВСЕГДА ГОТОВА, а ты консоль смотри!')
   }
   return(
      <div>Тут начисления - 
      <button onClick={onClickPlus}>Отправить calculations</button>
      </div>
   )
}

export default IncPaymentRevo;