import React, { Component } from "react";
import "./item.css";

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={"./img/" + this.props.item.img} alt="img" className="item-img" onClick={() => this.props.onShowItem(this.props.item)} />
                <h2 className="item-title">{this.props.item.title}</h2>
                <p className="item-desc">{this.props.item.desc}</p>
                <b className="item-price">{this.props.item.price}$</b>
                <div className="add-to-card" onClick={() => this.props.onAdd(this.props.item)}>
                    +
                </div>
            </div>
        );
    }
}

export default Item;
