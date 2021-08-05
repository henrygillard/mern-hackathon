import OrderListItem from "../OrderListItem/OrderListItem";
import "./OrderList.css"

export default function OrderList({ orders, changeSelected, selected }) {
   
    const order = orders.map((o, idx) => <OrderListItem changeSelected={changeSelected} selected={selected} order={o} key={idx}/>)
    
    return(
        <div 
        className="OrderList">
           {order}
        </div>
    )
}