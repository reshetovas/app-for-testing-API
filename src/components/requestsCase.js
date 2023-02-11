function RequestsRevo({pushRequests}) {
   const onClickRequests = ({}) => {
//      console.log(pushRequests()) //переменная obj = {title, price, imageUrl} => функция onClickAdd
      pushRequests();
      alert('АЖ ТАПКИ УЛЕТЕЛИ!')
   }
   return(
      
      <div>Тыкай, нормально будет - 
      <button onClick={onClickRequests}>Отправить credit_requests</button>
      </div>
   )
}

export default RequestsRevo;