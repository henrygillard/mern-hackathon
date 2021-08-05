import "./OrderListItem.css";

export default function OrderListItem({order, selected, changeSelected}) {

    if(selected === order.orderId) {
        return (
            <div style={{border:" 1px solid black"}}
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