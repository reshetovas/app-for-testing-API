function ContractRevo({pushContract}) {
   const onClickPlus = ({}) => {
//      console.log(pushRequests()) //переменная obj = {title, price, imageUrl} => функция onClickAdd
      pushContract();
      alert('МОЯ ПУСИ ДЛЯ НЕГО ВСЕГДА ГОТОВА, а ты консоль смотри!')
   }
   return(
      <div>Толық газ ағасы 
      <button onClick={onClickPlus}>Отправить credut_contract</button>
      </div>
   )
}

export default ContractRevo;