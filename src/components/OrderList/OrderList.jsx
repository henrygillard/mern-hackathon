import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList({ orders }) {
   
    const order = orders.map((o, idx) => <OrderListItem order={o} key={idx}/>)

    return(
        <div className="OrderList">
           {order}
        </div>
    )
}