import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { useState, useEffect } from 'react';
import OrderList from "../../components/OrderList/OrderList";
import * as ordersAPI from "../../utilities/orders-api";

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrder] = useState([]); 

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAll();
      setOrder(orders);
    }
    getOrders();
  }, []); 

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList orders={orders}/>
      



    </main>
  );
}