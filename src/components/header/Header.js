import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "../order/Order";

import "./header.css";

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);
    let summa = 0;
    props.orders.forEach((el) => (summa += +el.price));
    const showOrders = (props) => {
        return (
            <div className="shop-cart__body">
                {props.orders.map((el) => (
                    <Order key={el.id} item={el} onDelete={props.onDelete} />
                ))}
                <p className="summa">Сумма:{new Intl.NumberFormat().format(summa)}$</p>
            </div>
        );
    };
    const showNothing = () => {
        return (
            <div className="empty">
                <h2>Товаров нет</h2>
            </div>
        );
    };
    return (
        <header className="header">
            <div className="">
                <span className="logo">House Staff</span>
                <ul className="nav">
                    <li className="nav-item">Про нас</li>
                    <li className="nav-item">Контакты</li>
                    <li className="nav-item">Кабинет</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen((cartOpen = !cartOpen))} className={`shop-cart-button ${cartOpen && "active"}`} />
                {cartOpen && <div className="shop-cart">{props.orders.length > 0 ? showOrders(props) : showNothing()}</div>}
            </div>
            <div className="presentation"></div>
        </header>
    );
}
