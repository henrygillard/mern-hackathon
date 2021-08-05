import "./OrderListItem.css";

export default function OrderListItem({order, selected, changeSelected}) {

    let orderDay = order.updatedAt.toString().split('');
    let newDate = [];
    for (let idx=0; orderDay.length > idx; ++idx){
        console.log(orderDay[idx])
        if (idx < 10){
            newDate.push(orderDay[idx]);
        }
    }
    

    if(selected === order.orderId) {
        return (
            <div style={{border:" 1px solid black"}}
            onClick={() => changeSelected(order.orderId)}className="OrderListItem">
                <div className="align-left">
                    <div>
                        Order Id: <span>{order.orderId}</span>
                    </div>
                    <div>
                        {newDate}
                    </div>
                </div>
                <div className="align-right">
                    <div>
                        $<span>{order.orderTotal}</span>
                    </div>
                    <div>
                        {order.totalQty}
                    </div>
                </div>
    
            </div>
        )
    } else {
        return (
            <div 
            onClick={() => changeSelected(order.orderId)}className="OrderListItem">
                <div className="align-left">
                    <div>
                        Order Id: <span>{order.orderId}</span>
                    </div>
                    <div>
                        {order.updatedAt}
                    </div>
                </div>
                <div className="align-right">
                    <div>
                        $<span>{order.orderTotal}</span>
                    </div>
                    <div>
                        {order.totalQty}
                    </div>
                </div>
    
            </div>
        )
    }
}