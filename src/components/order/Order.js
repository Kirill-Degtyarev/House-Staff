import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
import "./order.css";

export class Order extends Component {
    render() {
        return (
            <div className="item-order">
                <div className="item-order__body">
                    <img src={"./img/" + this.props.item.img} alt="" className="item-order-img" />
                    <div className="item-order__info">
                        <h2 className="item-order-title">{this.props.item.title}</h2>
                        <b className="item-order-price">{this.props.item.price}$</b>
                    </div>
                </div>
                <FaTrash
                    className="delete-icon"
                    onClick={() => {
                        this.props.onDelete(this.props.item.id);
                    }}
                />
            </div>
        );
    }
}

export default Order;
