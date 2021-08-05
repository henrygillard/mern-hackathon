import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList({ orders }) {
   
    const order = orders.map((o) => <OrderListItem order={o}/>)

    return(
        <div className="OrderList">
           {order}
        </div>
    )
}