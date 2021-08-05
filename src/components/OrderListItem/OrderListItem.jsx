export default function OrderListItem({order}) {
    return (
        <div className="OrderListItem">
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