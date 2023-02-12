function RequestsRevo({pushRequests}) {
   const onClickRequests = ({}) => {
//      console.log(pushRequests()) //переменная obj = {title, price, imageUrl} => функция onClickAdd
      pushRequests();
      alert('Ушли запросы, смотри консоль')
   }
   return(
      
      <div>Тыкай, нормально будет - 
      <button onClick={onClickRequests}>Отправить credit_requests</button>
      </div>
   )
}

export default RequestsRevo;