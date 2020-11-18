import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import Order from "./Order";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "EMPTY_BASKET",
    });
  }, []);

  useEffect(() => {
    if (user) {
      console.log(user);
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order key={i} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
